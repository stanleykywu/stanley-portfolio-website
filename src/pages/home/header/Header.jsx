import React from 'react'
import HeaderSocials from './HeaderSocials'
import CTA from './CTA'
import { Button, Container } from '@mui/material'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  btn: {
    border: 'none',
    cursor: 'pointer',
    color: '#f2f9ff',
    backgroundSize: '200%',
    transition: '0.4s',
    '&:hover': {
      backgroundPosition: 'right',
      border: 'none'
    }
  },
   btn1: {
     backgroundImage: 'linear-gradient(to right bottom, #4f6b9c, #adc3ef)'
   }
})

const Header = () => {
  const classes = useStyles()
  return (
    <Container id='header' align='center'>
      <div>
        <h3 style={{ marginTop: 50, marginBottom: 10 }}>Hey! I'm</h3>
        <h1 style={{ marginTop: 0, marginBottom: 10, fontSize: 40 }}>Stanley Wu</h1>
        <h5 className="text__light">Machine Learning Scientist/Engineer</h5>
        <CTA />
        <Button 
          size='large'
          variant="outlined" 
          href={'./blogs'}
          sx={{
            marginTop: 5,
            marginBottom: 1,
            color: '#f1f1e6',
            background: 'linear-gradient(to right bottom, #003e75, #adc3ef)'
          }}
          className={ `${classes.btn} ${classes.btn1}` }
        >
          Check Out My Blog!
        </Button>
        <HeaderSocials />
      </div>  
    </Container>
  )
}

export default Header