import React from 'react'
import CTA from './CTA'
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
      <Grid container display={(isMobile) ? 'block' : 'flex'} direction={(isMobile) ? 'column' : "row"} justifyContent="center" paddingTop={10}> 
        <Grid item md={3}>
          <Avatar alt='Stanley Wu' src={ME} variant='circular' sx={{ width: '300px', height: '300px' }} style={{background: 'linear-gradient(to right bottom, #adc3ef, transparent)'}}/>
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
        </Grid>
        <Grid item md={8}>
          <h1 style={{ marginTop: 0, marginBottom: 10, fontSize: 40 }}>Stanley Wu</h1>
          <h5 className="text__light">Machine Learning Researcher and Data Scientist</h5>
          <CTA />
          <div align="left" style={{ paddingLeft: 100, marginTop: 35 }}>
            Hi! I'm Stanley, and I'm currently a Data Scientist at Klaviyo and a recent computer science graduate from Northeastern University. My primary academic interest is trustworthy machine learning, which includes ML privacy, adversarial ML, explainable AI, and machine unlearning. Currently, I am working on the intersection of ML and privacy.
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Header