import React from 'react'
import {FiLinkedin} from 'react-icons/fi'
import {VscGithub} from 'react-icons/vsc'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com/in/stanleykywu' target="_blank" rel="noreferrer"><FiLinkedin/></a>
        <a href='https://github.com/stanleykywu' target="_blank" rel="noreferrer"><VscGithub/></a>
    </div>
  )
}

export default HeaderSocials