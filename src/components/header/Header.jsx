import React from 'react'
import HeaderSocials from './HeaderSocials'
import CTA from './CTA'

import './header.css'

import ME from '../../assets/me.png'

const Header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <h3>Hey! I'm</h3>
        <h1>Stanley Wu</h1>
        <h5 className="text-light">Machine Learning Scientist/Engineer</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt='me'></img>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>  
    </header>
  )
}

export default Header