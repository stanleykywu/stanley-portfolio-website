import React from 'react'
import ME from '../../../assets/me-about.jpg'
import '../../../index.css'
import {TbAward} from 'react-icons/tb'
import {SiArxiv} from 'react-icons/si'
import {FiGithub} from 'react-icons/fi'
import { Avatar, Button, Container, Grid } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Container id='about' align='center' sx={{ overflow: 'auto' }}>
      <div>
        <h5 className="text__light__top">Get to Know</h5>
        <h2 style={{ marginBottom: 70 }}>Who I Am</h2>
        <Grid container display={(isMobile) ? 'block' : 'flex'} direction={(isMobile) ? 'column' : "row"} justifyContent="center"> 
          <Grid item md={3}>
            <Avatar alt='Stanley Wu About' src={ME} variant='rounded' sx={{ width: 'auto', height: 'auto' }}/>
          </Grid>
          <Grid item md={1}/>
          <Grid item md={7}>
            <div align='left'>
              <Grid container alignItems="center" paddingTop={4} paddingBottom={5} paddingRight={0} columns={{ xs: 5, md: 8.5 }}>
                <Grid item xs={5} md={2.5}>
                  <Button variant='contained' href='https://arxiv.org/abs/2205.06369' target='_blank' rel="noopener noreferrer" sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#adc3ef' }} className='slight__hover'>
                    &nbsp;
                    <SiArxiv size={30} style={{color: '#002647'}}/>
                    <div style={{ wordWrap: "break-word", color: "#002647" }}>Research</div>
                    <h5 className="text__darker">Ml + Privacy</h5>
                  </Button>
                </Grid>
                <Grid item xs={0} md={0.5}/>
                <Grid item xs={5} md={2.5}>
                  <Button variant='contained' href='https://www.linkedin.com/in/stanleykywu/details/experience/' target='_blank' rel="noopener noreferrer" sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#adc3ef'}} className='slight__hover'>
                    &nbsp;
                    <TbAward size={30} style={{color: '#002647'}}/>
                    <div style={{ wordWrap: "break-word", color: "#002647" }}>Experience</div>
                    <h5 className="text__darker">2023 New Grad</h5>
                  </Button>
                </Grid>
                <Grid item xs={0} md={0.5}/>
                <Grid item xs={5} md={2.5}>
                  <Button variant='contained' href='https://github.com/stanleykywu?tab=repositories' target='_blank' rel="noopener noreferrer" sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#adc3ef' }} className='slight__hover'>
                    &nbsp;
                    <FiGithub size={30} style={{color: '#002647'}}/>
                    <div style={{ wordWrap: "break-word", color: "#002647" }}>GitHub</div>
                    <h5 className="text__darker">Projects</h5>
                  </Button>
                </Grid>
              </Grid>
              <div className='white__color'>
                I’m a current Computer Science major @ Northeastern University with a concentration in artificial intelligence. I aspire to be a machine learning researcher and I’m actively involved in the intersection of privacy and machine learning research.
              </div>
            </div>  
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

export default About