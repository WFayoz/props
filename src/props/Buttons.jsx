import React from 'react'
import '../App.css';

const Buttons = (props) => {
  return (
    <button className='propBtn'>
        {props.text}
    </button>

  )
}

export default Buttons