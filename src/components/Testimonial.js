import React from 'react'
import '../styles/Testimonial.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../assets/img/profile1.jpg";
import profilePic2 from "../assets/img/profile2.jpg";
import profilePic3 from "../assets/img/profile3.jpg";
import profilePic4 from "../assets/img/profile4.jpg";



export const Testimonial = () => {
    const clients = [
        {
          img: profilePic1,
          review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
        {
          img: profilePic2,
          review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
        {
          img: profilePic3,
          review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
        {
          img: profilePic4,
          review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
      ];
  return (
    <div className="t-wrapper">
        <div className="t-heading">
            <span>Clients Always get</span>
            <span>Expceptional Work</span>
            <span>From me ...</span>
            <div className="blur t-blur1" style={{ background: "purple" }}></div>
            <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
        </div>


        {/* slider */}
        <Swiper>
            {clients.map((client, index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonial"> 
                        <img src={client.img} alt="" />
                        <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}
