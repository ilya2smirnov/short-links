import React, {useState} from "react";

function LinkInput(props) {
  let [inputLink, setInputLink] = useState("");

  function onFormClick(e) {
    e.preventDefault();
    props.onClickCreateLink(inputLink);
    setInputLink("")
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