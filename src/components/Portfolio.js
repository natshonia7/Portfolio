import React from 'react'
import '../styles/Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Sidebar from "../assets/img/sidebar.png";
import Ecommerce from "../assets/img/ecommerce.png";
import HOC from "../assets/img/hoc.png";
import MusicApp from "../assets/img/musicapp.png";
import "swiper/css";



const Portfolio = () => {
  return (
    <div className="portfolio">
        <span>Recet Project</span>
        <span>Portfolio</span>

        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio