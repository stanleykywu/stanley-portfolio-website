import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {TbAward} from 'react-icons/tb'
import {SiArxiv} from 'react-icons/si'
import {FiGithub} from 'react-icons/fi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>Who I Am</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <a class="about__card" href="https://www.linkedin.com/in/stanleykywu/details/experience/" target="_blank" rel="noreferrer">
              <TbAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2023 New Grad</small>
            </a>
            <a className='about__card' href="https://arxiv.org/abs/2205.06369" target="_blank" rel="noreferrer">
              <SiArxiv className='about__icon'/>
              <h5>Research</h5>
              <small>ML + Privacy</small>
            </a>
            <a className='about__card' href="https://github.com/stanleykywu?tab=repositories" target="_blank" rel="noreferrer">
              <FiGithub className='about__icon'/>
              <h5>GitHub</h5>
              <small>Projects</small>
            </a>
            Lore Ipsum
          </div>
        </div>
      </div>
    </section>
  )
}

export default About