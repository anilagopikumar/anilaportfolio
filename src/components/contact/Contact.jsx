import React from 'react'
import './contact.css'
import {FaGoogle,FaLinkedinIn,FaGithub,FaTwitter,FaInstagram} from 'react-icons/fa'
const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Connect</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <div className="contact__socials">
          <a className='icon' href='mailto:anila.desha094@gmail.com' target="_blank"><FaGoogle/></a>
          <a className='icon' href='https://www.linkedin.com/in/anila-gopikumar/'><FaLinkedinIn/></a>
          <a className='icon' href='https://github.com/anilagopikumar'><FaGithub/></a>
          <a className='icon' href='https://twitter.com/DeshaAnila'><FaTwitter/></a>
          <a className='icon' href='https://www.instagram.com/anila_gopikumar/'><FaInstagram/></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact