import React from 'react'
import './nav.css'
import {IoHomeOutline} from 'react-icons/io5'
import {AiOutlineUser} from 'react-icons/ai'
import {MdWorkOutline} from 'react-icons/md'
import {HiOutlineMail} from 'react-icons/hi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#header');
  return (
    <nav>
      <a href="#header" onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active': ''}><IoHomeOutline/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><MdWorkOutline/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><HiOutlineMail/></a>
    </nav>
  )
}

export default Nav