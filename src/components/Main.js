import React, { useState } from 'react'
import Alert from './Alert';

export default function Main(props) {
  const [message, setMessage] = useState('');
  const [text, setText] = useState('');


  let upper = () => {
    document.getElementById('textbox').value = text.toUpperCase();
    setMessage('text converted to uppercase');
    setTimeout(() => { setMessage('') }, 1500);


  }
  let lower = () => {
    document.getElementById('textbox').value = text.toLowerCase();
    setMessage('text converted to lowercase');
    setTimeout(() => { setMessage('') }, 1500);


  }
  let speak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    msg.volume = 0.5;
    window.speechSynthesis.speak(msg);
    setMessage('speaking your text');
    setTimeout(() => { setMessage('') }, 1500);


  }
  let copy = () => {
    navigator.clipboard.writeText(document.getElementById('textbox').value);
    setMessage('text copied successfully');
    setTimeout(() => { setMessage('') }, 1500);

  }
  let rmvspc = () => {
    let newstr = text.replace(/ +(?= )|\t+/g, '').trim();
    document.getElementById('textbox').value = newstr;
    setText(newstr);
    setMessage('extra spaces removed successfully');
    setTimeout(() => { setMessage('') }, 1500);

  }
  let capfirst = () => {
    let segments = text.split(' ');
    segments = segments.map((segment) => {
      return segment.trim().charAt(0).toUpperCase() + segment.slice(1);
    })
    let newstr=segments.join(' ');
    document.getElementById('textbox').value = newstr;
    setText(newstr);
    setMessage('first alphabet capitalized successfully');
    setTimeout(() => { setMessage('') }, 1500);
  }

  let delall = () => {
    setText('');
    document.getElementById('textbox').value = '';
    setMessage('text removed successfully');

    setTimeout(() => { setMessage('') }, 1500);
  }

  let format = () => {
    // remove extra spaces
    let newstr = text.replace(/ +(?= )|\t+/g, '').trim();
    // Split the string on both '.' and '\n'
    let segments = newstr.split(/(\n|\. )/);

    // Capitalize the first letter of each line
    let capitalizedSegments = segments.map((segment) => {
      if (segment === '. ' || segment === '\n') {
        return segment;
      } else {
        return segment.trim().charAt(0).toUpperCase() + segment.slice(1);
      }
    });

    // Join the segments back together
    newstr = capitalizedSegments.join('');




    //update text string
    document.getElementById('textbox').value = newstr;
    setText(newstr);
    setMessage('text format successfully');
    setTimeout(() => { setMessage('') }, 1500);
  }

  return (
    <>

      <Alert message={message} />
      <form action="" className='container'>
        <h3>{props.title}</h3>
        <textarea name="textbox" id="textbox" style={{ height: "40vh", width: "70vw" }} placeholder='Enter your text here' onChange={() => { setText(document.getElementById('textbox').value) }}>

        </textarea><br />
        <button type="button" className='btn btn-primary mx-1 my-1' onClick={upper}>Convert To Uppercase</button>
        <button type="button" className='btn btn-primary mx-1 my-1' onClick={lower}>Convert To Lowercase</button>
        <button type="button" className='btn btn-danger mx-1 my-1' onClick={speak}>Speak Text</button>
        <button type="button" className='btn btn-primary mx-1 my-1' onClick={copy}>Copy Text</button>
        <button type="button" className='btn btn-primary mx-1 my-1' onClick={delall}>Clear Text</button>
        <button type="button" className='btn btn-primary mx-1 my-1' onClick={format}>Format Text</button>
        <button type="button" className='btn btn-primary mx-1 my-1' onClick={rmvspc}>Remove Extra Space</button>
        <button type="button" className='btn btn-primary mx-1 my-1' onClick={capfirst}>Capitalize First Alphabet</button>

      </form>
      <div className="container">
        <h2 style={{ borderBottom: "2px solid black" }}>Text characterstics</h2>
        <h5>Number of characters are: {text.length}</h5>
        <h5>Number of words are: {text.split(' ').filter((element) => { return element !== "" }).length}</h5>

      </div>

    </>

  );
}
