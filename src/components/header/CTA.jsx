import React from 'react'
import CV from "../../assets/CV.pdf";
import {FaLinkedinIn,FaGithub,FaTwitter,FaInstagram} from 'react-icons/fa'
const CTA = () => {
  return (
    <div>
    <div className='CTA'>
    <a href={CV} download className='btn'>Download CV</a>
    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
    <div className='header__socials'>
    <a className='icon' href='https://www.linkedin.com/in/anila-gopikumar/'><FaLinkedinIn/></a>
    <a className='icon' href='https://github.com/anilagopikumar'><FaGithub/></a>
    <a className='icon' href='https://twitter.com/DeshaAnila'><FaTwitter/></a>
    <a className='icon' href='https://www.instagram.com/anila_gopikumar/'><FaInstagram/></a>
    </div>
    </div>
   
    
  )
}

export default CTA