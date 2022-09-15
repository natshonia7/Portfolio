import React from 'react'
import '../styles/Toggle.css'
import { BiSun, BiMoon} from "react-icons/bi";
import { themeContext } from '../Context';
import { useContext } from 'react';

const Toggle = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const handleClick = () => {
      theme.dispatch({ type: "toggle" });
    };



  return (
    <div className="toggle">
      <BiMoon/>
      <BiSun/>
      <div
        className="t-button"
        onClick={handleClick}
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  )
}

export default Toggle
