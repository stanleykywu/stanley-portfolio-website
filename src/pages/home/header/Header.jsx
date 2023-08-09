import React from 'react'
import CTA from './cta/CTA'
import { Container, Grid, Avatar, ListItem, List } from '@mui/material'
import ME from '../../../assets/me.png'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faGoodreads, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faEnvelope, faGraduationCap, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import RESUME from '../../../assets/resume.pdf'

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Container id='home' align='center'>
      <Grid container display={(isMobile) ? 'block' : 'flex'} direction={(isMobile) ? 'column' : "row"} justifyContent="center" paddingTop={12}> 
        <Grid item md={4} paddingTop={2}>
          <Avatar alt='Stanley Wu' src={ME} variant='circular' sx={{ width: '300px', height: '300px' }} style={{background: 'linear-gradient(to right bottom, #96C2DB, transparent)'}}/>
          <CTA/>
        </Grid>
        <Grid md={1}/>
        <Grid item md={7} textAlign="left">
          <h1 style={{ marginTop: 0, marginBottom: 10, fontSize: 40 }}>Stanley Wu</h1>
          
          <Grid container spacing={0} alignItems="left" justifyContent="left">
            <Grid item xs={4}> 
              <List sx={{ paddingLeft: "0px", marginLeft: "0px" }}>
                <ListItem>
                  <i aria-hidden="true" style={{ marginRight: "5px"}}>
                    <FontAwesomeIcon icon={faLocationDot} style={{ color: "#adc3ef"}}></FontAwesomeIcon>
                  </i>
                  Chicago, IL
                </ListItem>
                <ListItem>
                  <a href='mailto: stanleykywu@gmail.com' target="_blank" rel="noreferrer" style={{textDecoration: 'underline', color: 'black'}}>
                    <i style={{ marginRight: "5px"}}>
                      <FontAwesomeIcon icon={faEnvelope} style={{ color: "#adc3ef"}}></FontAwesomeIcon>
                    </i>
                    Email
                  </a>
                </ListItem>
                <ListItem>
                  <a href={RESUME} target="_blank" rel="noreferrer" style={{textDecoration: 'underline', color: 'black'}}>
                    <i style={{ marginRight: "5px"}}>
                      <FontAwesomeIcon icon={faFilePdf} style={{ color: "#adc3ef"}}></FontAwesomeIcon>
                    </i>
                    CV
                  </a>
                </ListItem>
                <ListItem>
                  <a href='https://scholar.google.com/citations?user=wkis3pgAAAAJ&hl=en' target="_blank" rel="noreferrer" style={{textDecoration: 'underline', color: 'black'}}>
                    <i style={{ marginRight: "5px"}}>
                      <FontAwesomeIcon icon={faGraduationCap} style={{ color: "#adc3ef"}}></FontAwesomeIcon>
                    </i>
                    Google Scholar
                  </a>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={4}>
              <List>
                <ListItem>
                  <a href='https://linkedin.com/in/stanleykywu' target="_blank" rel="noreferrer" style={{textDecoration: 'underline', color: 'black'}}>
                    <i style={{ marginRight: "5px"}}>
                      <FontAwesomeIcon icon={faLinkedin} style={{ color: "#0077B5"}}></FontAwesomeIcon>
                    </i>
                    LinkedIn
                  </a>
                </ListItem>
                <ListItem>
                  <a href='https://github.com/stanleykywu' target="_blank" rel="noreferrer" style={{textDecoration: 'underline', color: 'black'}}>
                    <i style={{ marginRight: "5px"}}>
                      <FontAwesomeIcon icon={faGithub} style={{ color: "black"}}></FontAwesomeIcon>
                    </i>
                    GitHub
                  </a>
                </ListItem>
                <ListItem>
                  <a href='https://twitter.com/the_stanleywu' target="_blank" rel="noreferrer" style={{textDecoration: 'underline', color: 'black'}}>
                    <i style={{ marginRight: "5px"}}>
                      <FontAwesomeIcon icon={faXTwitter} style={{ color: "black"}}></FontAwesomeIcon>
                    </i>
                    Twitter
                  </a>
                </ListItem>
                <ListItem>
                  <a href='https://goodreads.com/stanleywu' target="_blank" rel="noreferrer" style={{textDecoration: 'underline', color: 'black'}}>
                    <i style={{ marginRight: "5px"}}>
                      <FontAwesomeIcon icon={faGoodreads} style={{ color: "#553b08"}}></FontAwesomeIcon>
                    </i>
                    goodreads
                  </a>
                </ListItem>
              </List>
            </Grid>
          </Grid> 
          <p align="left" style={{  }}>
            I am a Ph.D. student at the University of Chicago <a href='https://sandlab.cs.uchicago.edu/' target="_blank" rel="noreferrer" style={{textDecoration: 'underline', color: 'black'}}>SAND Lab</a>, co-advised by <a href='https://people.cs.uchicago.edu/~ravenben/' target="_blank" rel="noreferrer" style={{textDecoration: 'underline', color: 'black'}}>Ben Zhao</a> and <a href='https://people.cs.uchicago.edu/~htzheng/' target="_blank" rel="noreferrer" style={{textDecoration: 'underline', color: 'black'}}>Heather Zheng</a>. 
          </p>
          <p align="left">
            My primary academic interests lie in trustworthy machine learning, and I am currently focused on researching solutions to those affected by unethical AI/ML systems.
          </p>
          <p>
            I received my bachelors in computer science from Northeastern University, during which I was very fortunate to work with <a href='https://www.ccs.neu.edu/home/alina/' target="_blank" rel="noreferrer" style={{textDecoration: 'underline', color: 'black'}}>Alina Oprea</a>, and <a href='https://jonathan-ullman.github.io/' target="_blank" rel="noreferrer" style={{textDecoration: 'underline', color: 'black'}}>Jonathan Ullman</a>. I have held several industry positions in the past, mainly in software engineering and data science. Recently, I was a data scientist at <a href='https://www.klaviyo.com/' target="_blank" rel="noreferrer" style={{textDecoration: 'underline', color: 'black'}}>Klaviyo</a> and <a href='https://www.proofpoint.com/us' target="_blank" rel="noreferrer" style={{textDecoration: 'underline', color: 'black'}}>Proofpoint</a>.
          </p>  
          <p><b>Email:</b> stanleywu AT cs DOT uchicago DOT edu</p>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Header