import React from 'react'
import '../styles/Footer.css'
import Wave from '../assets/img/wave.png'
import { BsInstagram,BsFacebook, BsGithub} from "react-icons/bs";


export const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width: '100%'}} />
        <div className="f-content">
           <span>nati.shonia37@gmail.com</span> 
           <div className="f-icons">
              <BsInstagram color='white' size='3rem'/>
              <BsFacebook color='white' size='3rem'/>
              <BsGithub color='white' size='3rem'/>
           </div>
        </div>
        </div>
  )
}
