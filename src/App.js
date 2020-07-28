import React, {useContext, useState} from 'react';
import './App.css';
import LinkInput from './LinkInput'
import generateShortLink from "./ShortLinkGenerator";
import AppContext from './AppContext'
import LastLink from "./LastLink";

function App() {

  let [lastLink, setLastLink] = useState({shown: false, userLink: "", shortLink: ""});
  let context = useContext(AppContext);

  function onClickCreateLink(userLink) {
    setLastLink({shown: true, userLink: userLink, shortLink: generateShortLink(userLink)})
    setTimeout(() => {
      if (lastLink === context.lastLink) {
        setLastLink({...lastLink, shown: false});
        console.log("Hide link", lastLink, context.lastLink);
      } else {
        console.log("Skip updating 'shown' parameter because state changed", lastLink, context.lastLink);
      }
    }, 3000);
  }

  return (
    <AppContext.Provider value={{onClickCreateLink, lastLink}}>
      <div className="App">
        <h1>Hello world!</h1>
        <LinkInput />
        {lastLink.shown ? <LastLink /> : null}
      </div>
    </AppContext.Provider>
  );
}

export default App;
