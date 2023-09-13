import React from 'react'

export default function Alert(props) {
  
  return (
    <p id='para-text' style={{height:"50px",color:'red',textAlign:'center'}}>
        {props.message.toUpperCase()}
    </p>
  )
}
