import React from 'react'
import '../styles/FloatingDiv.css'

const FloatingDiv = ({image, text1, text2}) => {
  return (
   <div className="floatingdiv">
    <img src={image} alt="" />
    <span>{text1}</span>
    <br />
    {text2}
   </div>
  )
}

export default FloatingDiv
