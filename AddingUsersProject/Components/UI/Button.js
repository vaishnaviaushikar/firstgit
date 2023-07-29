import React from 'react'
import './Button.css'
export default function Button(props) {
  return (
    <div >
      <button className='button' type={props.type} onClick={props.onclick}>{[props.children]}</button>
    </div>
  )
}
