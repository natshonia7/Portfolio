import React from 'react'
import '../styles/Intro.css'
import { BsGithub,BsLinkedin, BsInstagram} from "react-icons/bs";
import Vector1 from '../assets/img/Vector1.png'
import Vector2 from '../assets/img/Vector2.png'
import myphoto from '../assets/img/11.png'
import FloatingDiv from './FloatingDiv';
import crown from '../assets/img/crown.png'
import thumbup from '../assets/img/thumbup.png'





function Intro() {
  return (
    <div className="intro">
        <div className="i-left">
        <div className="i-name">
            <span>Hy!I Am </span>
            <span>Natia Shonia</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque voluptatem delectus iure quasi accusamus eum, deserunt repudiandae nihil! Aliquid, ipsam officia? Quos repellat aliquam molestias omnis deserunt
             !</span>
        </div>
         <button className="button i-button">
            Hire me
         </button>

         <div className="i-icons">
            <BsGithub className='icons_11'/>
            <BsLinkedin className='icons_1'/>
            <BsInstagram className='icons_1'/>
         </div>
        </div>
        <div className="i-right">
       
           <img src={Vector1} alt="" />
           <img src={Vector2} alt="" />
           <img src={myphoto} alt="" className='myphoto' />

           <div style={{top : '-2%', left : '50%'}}>
             <FloatingDiv image={crown} text1='Web' text2='Developer'/>
           </div>

           <div style={{top : '18rem', left : '0rem'}}>
             <FloatingDiv image={thumbup} text1='Web' text2='Developer'/>
           </div>

           <div className="blur" style={{background : "rgba(238, 210, 255)"}}>       </div>
        </div>
        <div className="blur"  style={{
            background: '#c1f5fa',
            top: "14rem",
            width: '21rem',
            height: '11rem',
            left: '-9rem'
        }}>

           </div>
    </div>
  )
}

export default Intro
