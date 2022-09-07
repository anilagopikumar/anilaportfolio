import React from 'react'
import './header.css'
import CTA from './CTA'
import Profile1 from '../../assets/Profile1.JPG'
const Header = () => {
  return (
    <header id="header">
     <div className='container header__container'> 
    <h5 className='heading'>Hello,I'm</h5>
    <h1>Anila GopiKumar</h1>
    <h5 className='text-light'>Software Developer</h5>
    <CTA/>
    <div className='Profile'>
    <img src={Profile1} alt="me" />
    </div>
     </div>
   </header>
  )
}

export default Header