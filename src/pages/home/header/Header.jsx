import React from 'react'
import CTA from './cta/CTA'
import { Container, Grid, Avatar } from '@mui/material'
import Box from '@mui/material/Box';
import ME from '../../../assets/me.png'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { BsInstagram } from 'react-icons/bs';
import {FiLinkedin} from 'react-icons/fi'
import {VscGithub} from 'react-icons/vsc'
import IconButton from '@mui/material/IconButton'
import { AiFillMail } from 'react-icons/ai';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Container id='home' align='center'>
      <Grid container display={(isMobile) ? 'block' : 'flex'} direction={(isMobile) ? 'column' : "row"} justifyContent="center" paddingTop={12}> 
        <Grid item md={4} paddingTop={2}>
          <Avatar alt='Stanley Wu' src={ME} variant='circular' sx={{ width: '300px', height: '300px' }} style={{background: 'linear-gradient(to right bottom, #96C2DB, transparent)'}}/>
          <Box  
            sx={{
              flexDirection: 'row',
              paddingTop: 0.5,
              paddingLeft: 1,
            }}
          >
            <IconButton variant='contained' href='https://linkedin.com/in/stanleykywu' target="_blank">
              <FiLinkedin style={{color: '#adc3ef'}} className={"white__hover"}/>
            </IconButton>
            <IconButton variant='contained' href='https://github.com/stanleykywu' target="_blank">
              <VscGithub style={{color: '#adc3ef'}} className={"white__hover"}/>
            </IconButton>
            <IconButton variant='contained' href='https://www.instagram.com/stanleykywu/' target="_blank">
              <BsInstagram style={{color: '#adc3ef'}} className={"white__hover"}/>
            </IconButton>
            <IconButton variant='contained' sx={{ paddingTop: 2 }}>
              <a href='mailto: stanleykywu@gmail.com'>
                <AiFillMail style={{color: '#adc3ef'}} className={"white__hover"}/>
              </a>
            </IconButton>
          </Box>
          <CTA />
        </Grid>
        <Grid md={1}/>
        <Grid item md={7} textAlign="left">
          <h1 style={{ marginTop: 0, marginBottom: 10, fontSize: 40 }}>Stanley Wu</h1>
          <p align="left" style={{  }}>
            I am a Ph.D. student at the University of Chicago <a href='https://sandlab.cs.uchicago.edu/' target="_blank" rel="noreferrer">SAND Lab</a>, co-advised by <a href='https://people.cs.uchicago.edu/~ravenben/' target="_blank" rel="noreferrer">Ben Zhao</a> and <a href='https://people.cs.uchicago.edu/~htzheng/' target="_blank" rel="noreferrer">Heather Zheng</a>. 
          </p>
          <p align="left">
            My primary academic interests lie in trustworthy machine learning, and I am currently focused on researching solutions to those affected by unethical AI/ML systems.
          </p>
          <p>
            I received my bachelors in computer science from Northeastern University, during which I was very fortunate to work with <a href='https://www.ccs.neu.edu/home/alina/' target="_blank" rel="noreferrer">Alina Oprea</a>, and <a href='https://jonathan-ullman.github.io/' target="_blank" rel="noreferrer">Jonathan Ullman</a>. I have held several industry positions in the past, mainly in software engineering and data science. Recently, I was a data scientist at <a href='https://www.klaviyo.com/' target="_blank" rel="noreferrer">Klaviyo</a> and <a href='https://www.proofpoint.com/us' target="_blank" rel="noreferrer">Proofpoint</a>.
          </p>  
          <p><b>Email:</b> stanleywu AT cs.uchicago.edu</p>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Header