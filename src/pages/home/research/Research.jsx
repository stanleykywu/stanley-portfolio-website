import React from 'react'
import '../../../index.css'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Button } from '@mui/material'
import {SiArxiv} from 'react-icons/si'
import {DiGithubFull} from 'react-icons/di'
import Contact from './contact/Contact'

const Research = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Container id='research' align='center' sx={{ overflow: 'auto' }}>
      <Grid container display={(isMobile) ? 'block' : 'flex'} direction={(isMobile) ? 'column' : "row"} justifyContent="center">
        <Grid md={7.5}>
          <div align="left">
            <h2 style={{ paddingTop: 50, marginBottom: 30 }}>Publications</h2>
          </div>
          <Container align="left">
            <p>
              <strong>How to Combine Membership-Inference Attacks on Multiple Updated Models<br/>
              </strong>Matthew Jagielski, Stanley Wu, Alina Oprea, Jonathan Ullman, Roxana Geambasu<br/>
              <em>Privacy Enhancing Technologies Symposium (PETs), 2023 (soft accept)</em><br/>
              <Grid container direction='row'>
                <Grid md={1}>
                  <Button variant='contained' href='https://arxiv.org/abs/2205.06369' target='_blank' rel="noopener noreferrer" sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#adc3ef', maxWidth: '30px', marginTop: '10px' }} className='slight__hover'>
                    <SiArxiv size={30} style={{color: '#002647', maxWidth: '40'}}/>
                  </Button>
                </Grid>
                <Grid md={0.5}></Grid>
                <Grid md={1}>
                  <Button variant='contained' href='https://github.com/stanleykywu/model-updates' target='_blank' rel="noopener noreferrer" sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#adc3ef', maxWidth: '30px', marginTop: '10px' }} className='slight__hover'>
                    <DiGithubFull size={30} style={{color: '#002647'}}/>
                  </Button>
                </Grid>
              </Grid>
            </p>
          </Container>
        </Grid> 
        <Grid md={4}>
          <Contact/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Research