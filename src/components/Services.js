import React from 'react'
import '../styles/Services.css'
import Card from './Card'
// import Pdf from '../resume/resume.pdf';


import HeartEmoji from '../assets/img/heartemoji.png'


function Services() {
  return (
   <div className="services">
    <div className="awesome">
       <span>My Awesome</span>
       <span>services</span>
       <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero porro facere magni nihil expedita quod quidem tenetur
        <br />
        ispum is simpley dummy text of printing
        </span>
        {/* <a href={Pdf} download> dwdad</a> */}
        <button className='button s-button'>Dowload CV</button>
    </div>

    <div className="cards">
        <div style={{left:'14rem'}}>
            <Card
            emoji={HeartEmoji}
            heading={'Design'}
            detail={'Photoshop, Adobe, Adobe XD'}
            />
        </div>

        <div style={{top : '12rem', left : '-4rem'}}>
            <Card
            emoji={HeartEmoji}
            heading={'Developer'}
            detail={'Html, Css, JavaScript, Bootstrap, React'}
            />
        </div>
        <div style={{top : '19rem', left : '14rem'}}>
            <Card
            emoji={HeartEmoji}
            heading={'Developer'}
            detail={'Lorem ipsum dolor sit,officiis quod culpa'}
            />
        </div>
        <div className="blur" style={{background : "rgba(120, 210, 312)"}}>       </div>
     
   </div>
   </div>
  )
}

export default Services;
