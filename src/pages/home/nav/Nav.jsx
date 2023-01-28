import React from 'react'
import './nav.css'
import {IoHomeOutline} from 'react-icons/io5'
import {ImBooks} from 'react-icons/im'
import {MdWorkOutline} from 'react-icons/md'
import {HiOutlineMail} from 'react-icons/hi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#header');
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active': ''}><IoHomeOutline/></a>
      <a href="#research" onClick={() => setActiveNav('#about')} className={activeNav === '#research' ? 'active': ''}><ImBooks/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><MdWorkOutline/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><HiOutlineMail/></a>
    </nav>
  )
}

export default Nav