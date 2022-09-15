import React from 'react'
import '../styles/Works.css'
import Upwork from '../assets/img/Upwork.png'
import Fiverr from '../assets/img/fiverr.png'
import Amazon from '../assets/img/amazon.png'
import Shopify from '../assets/img/Shopify.png'
import Facebook from '../assets/img/Facebook.png'



const Works = () => {
  return (
    <div className="works">
      <div className="awesome">
        <span>Works for all these</span>
        <span>Brands</span>
        <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel at eaque dolores ipsam incidunt maiores deserunt sint! Harum
        <br />
        impsun is simpley dummy text of printing
         <br />
         impsun is simpley dummy text of printing
         <br />
         impsun is simpley dummy text of printing

        </span>
        <button className="button s-button">Hire me</button>
         <div className="blur s-blur1" style={{background : "#ABF1FF94"}}></div>
      </div>

         <div className="w-right">
          <div className="w-mainCircle">
            <div className="w-secCircle">
              <img src={Upwork} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Fiverr} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Amazon} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Shopify} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Facebook} alt="" />
            </div>
          </div>

          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>
         </div>

    </div>
  )
}

export default Works
