import React from 'react'
import '../styles/Contact.css'
import emailjs from '@emailjs/browser';

import { useRef } from 'react';

export const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

  
      emailjs.sendForm('service_hnr1s1n', 'template_4owup7n', form.current, 'pNsF93jlk8pd84nM4')
        .then((result) => {
            console.log(result.text);
            structuredClone(true)
        }, (error) => {
            console.log(error.text);
        });
    };
  
  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="awesome">
                <span style={{color: 'orange'}}>Get in touch</span>
                <span>Contact me</span>
            </div>
            <div className="blur t-blur1" style={{ background: "purple" }}>

            </div>
        </div>


        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
             <input type="text" name="user_name" className="user"  placeholder="Name"/>
             <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <span>{"Thanks for Contacting me"}</span>
          
          <div
            className="blur c-blur1"
            style={{ background: "lightblue" }}
          ></div>
            </form>


        </div>
    </div>
  )
}
