import React, { useState } from 'react'
import Alert from './Alert';
import Nav from './Nav';
export default function Main(props) {
  const [message,setMessage]=useState('');
  const [text, setText] = useState('');
  
  
  let upper = () => {
    document.getElementById('textbox').value = text.toUpperCase();
    setMessage('text converted to uppercase');
    setTimeout(()=>{setMessage('')},1500);

    
  }
  let lower = () => {
    document.getElementById('textbox').value = text.toLowerCase();
    setMessage('text converted to lowercase');
    setTimeout(()=>{setMessage('')},1500);

    
  }
  let speak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    msg.volume = 0.5;
    window.speechSynthesis.speak(msg);
    setMessage('speaking your text');
    setTimeout(()=>{setMessage('')},1500);


  }
  let copy = () => {
    navigator.clipboard.writeText(document.getElementById('textbox').value);
    setMessage('text copied successfully');
    setTimeout(()=>{setMessage('')},1500);
    
  }
  let delall=() => {
    setText('');
    document.getElementById('textbox').value='';
    setMessage('text removed successfully');
    
    setTimeout(()=>{setMessage('')},1500);

  }

  return (
    <>
    <Nav/>
    <Alert message={message}/>
      <form action="" className='container'>
        <h3>{props.title}</h3>
        <textarea name="textbox" id="textbox" style={{height:"40vh",width:"70vw"}} placeholder='Enter your text here' onChange={() => { setText(document.getElementById('textbox').value) }}>

        </textarea><br />
        <button type="button" className='btn btn-primary' onClick={upper}>uppercase</button>
        <button type="button" className='btn btn-primary mx-1' onClick={lower}>lowercase</button>
        <button type="button" className='btn btn-danger mx-1 my-1' onClick={speak}>speak</button>
        <button type="button" className='btn btn-primary mx-1 my-1' onClick={copy}>copy</button>
        <button type="button" className='btn btn-primary mx-1 my-1' onClick={delall}>clear</button>
      </form>
      <div className="container">
        <h2 style={{ borderBottom: "2px solid black" }}>Text characterstics</h2>
        <h5>Number of characters are: {text.length}</h5>
        <h5>Number of words are: {text.split(' ').filter((element)=>{return element!==""}).length}</h5>

      </div>

    </>

  );
}
