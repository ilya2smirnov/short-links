import React, {useContext, useState} from "react";
import AppContext from "./AppContext";

function LinkInput() {
  let [inputLink, setInputLink] = useState("");
  let context = useContext(AppContext);

  function onFormClick(e) {
    e.preventDefault();
    context.onClickCreateLink(inputLink);
    setInputLink("")
    console.log(e);
  }

  function onInputChanged(e) {
    setInputLink(e.target.value);
  }

  return (
    <form>
      <input type='text' onChange={onInputChanged} value={inputLink}/>
      <input type='submit' onClick={onFormClick}/>
    </form>
  )
}

export default LinkInput;