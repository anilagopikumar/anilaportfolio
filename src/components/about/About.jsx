import React from 'react'
import './about.css'
import Profile3 from '../../assets/Profile3.JPG'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id="about">
    <h5>Get to know</h5>
    <h2>About me</h2>
    <div className="container about__container">
    <div className="about__me">
    <div className="about__me-image">
    <img src={Profile3} alt='About Image'/>
    </div>
    </div>
    <div className="about__content">
    <div className="about__cards">
    <article className='about__card'>
    <FaAward className='about__icon'/>
    <h5>Experience</h5>
    <small>1.5 years of working</small>
    </article>
    <article className='about__card'>
    <VscFolderLibrary className='about__icon'/>
    <h5>Projects</h5>
    <small>4+ Projects</small>
    </article>
    </div>
    <p className='p'>
    An Alumni understudy who procured a four year certification in Data Innovation , Intrigued by Computerized reasoning and Front-End programming. I've finished undertakings in the fields of ANDROID and WEB applications with incredible achievement.
    </p>
    <p className='p1'>
    Interests: Cooking | Badminton | Watching movies | Traveling | Trekking | Photography | Yoga .
    </p>

    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
    </div>
    </section>
  )
}

export default About