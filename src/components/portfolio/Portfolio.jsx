import React from 'react'
import './portfolio.css'
import { BsPatchCheckFill } from 'react-icons/bs'
const Portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>Education & Work History</h5>
    <h2>Portfolio</h2>
    <div className="container portfolio__container">
    <div className="container portfolio__workhistory">
    <h3>Work History</h3>
    <div className='portfolio__content'>
    <article className='portfolio__details'>
    <BsPatchCheckFill className='portfolio__details-icon'/>
    <div>
    <h4>SDE - Prolifics , India</h4>
    </div>
    </article>
    <h5>Internships</h5>
    <article className='portfolio__details'>
    <BsPatchCheckFill className='portfolio__details-icon'/>
    <div>
    <h4>SDE - Edvenswa , India</h4>
    </div>
    </article>
    <article className='portfolio__details'>
    <BsPatchCheckFill className='portfolio__details-icon'/>
    <div>
    <h4>Intern - Clinch , India</h4>
    </div>
    </article>
    </div>
    </div>
    <div className="container portfolio__education">
    <h3>Education</h3>
    <div className="portfolio__content">
    <article className='portfolio__details'>
    <BsPatchCheckFill className='portfolio__details-icon'/>
    <div>
    <h4>B.E - IT - JNTU , India</h4>
    </div>
    </article>
    <article className='portfolio__details'>
    <BsPatchCheckFill className='portfolio__details-icon'/>
    <div>
    <h4>12TH - BIE , India</h4>
    </div>
    </article>
    <article className='portfolio__details'>
    <BsPatchCheckFill className='portfolio__details-icon'/>
    <div>
    <h4>10TH - BSET , India</h4>
    </div>
    </article>
    </div>
    </div>
    </div>
    </section>
  )
}

export default Portfolio