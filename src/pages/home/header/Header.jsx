import React from 'react'
import HeaderSocials from './HeaderSocials'
import CTA from './CTA'
import { Container } from '@mui/material'

const Header = () => {
  return (
    <Container id='header' align='center'>
      <div>
        <h3 style={{ marginTop: 50, marginBottom: 10 }}>Hey! I'm</h3>
        <h1 style={{ marginTop: 0, marginBottom: 10, fontSize: 40 }}>Stanley Wu</h1>
        <h5 className="text__light">Machine Learning Scientist/Engineer</h5>
        <CTA />
        <HeaderSocials />
      </div>  
    </Container>
  )
}

export default Header