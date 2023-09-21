import React, { useState } from 'react'

export default function TextForm(props) {

  const [text, setText] = useState('');

  const handleUpCLick = () => {
    console.log("Button was clicked", text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLowerCLick = () => {
    console.log("Button was clicked", text);
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleOnChange = (event) => {
    console.log("Change");
    setText(event.target.value);
    // console.log("text=",text);
  }

  const clearText = () => {
    console.log("Cleared");
    setText('');
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    const toogle = document.getElementById('toggle')
    if (toogle.textContent == "Speak") {
        toogle.innerHTML = "Stop"
    }
    else {
        toogle.innerHTML = "Speak"
        if (toogle.innerHTML = "Speak"){
            window.speechSynthesis.cancel()
        }
    }
}

  return (
    <>

      <div className="container">
        <h2>{props.heading}</h2>
        <textarea className="form-control my-3" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
        <button className="btn btn-primary my-3 mx-1" onClick={handleLowerCLick}>Convert to Lowercase</button>
        <button className="btn btn-primary my-3 mx-1" onClick={handleUpCLick}>Convert to Uppercase</button>
        <button className="btn btn-primary my-3 mx-1" onClick={clearText}>Clear Text</button>
        <button type="submit" className="btn btn-warning mx-2 my-2"onClick={speak}  id="toggle">Speak</button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p> 
        <p> Time to read : {text.split(" ").length*0.008} words</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>

      </>
  )
}
