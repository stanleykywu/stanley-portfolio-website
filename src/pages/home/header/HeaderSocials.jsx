import React from 'react'
import {FiLinkedin} from 'react-icons/fi'
import {VscGithub} from 'react-icons/vsc'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box';
import { AiOutlineMail } from 'react-icons/ai';
import { Avatar, Button, Grid } from '@mui/material';
import ME from '../../../assets/me.png'

const HeaderSocials = () => {
  return (
    <Grid container alignItems="center" paddingTop={4} columns={{ xs: 6, sm: 8, md: 12 }}>
      <Grid xs={0} md={1}></Grid>
      <Grid xs={1} md={1}>
        <Box  
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <IconButton variant='contained' href='https://linkedin.com/in/stanleykywu' target="_blank">
            <FiLinkedin style={{color: '#adc3ef'}} className={"white__hover"}/>
          </IconButton>
          <IconButton variant='contained' href='https://github.com/stanleykywu' target="_blank">
              <VscGithub style={{color: '#adc3ef'}} className={"white__hover"}/>
          </IconButton>
          <IconButton variant='contained'>
            <a href='mailto: stanleykywu@gmail.com'>
              <AiOutlineMail style={{color: '#adc3ef'}} className={"white__hover"}/>
            </a>
          </IconButton>
        </Box>
      </Grid>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={4} md={4}>
        <Avatar alt='Stanley Wu' src={ME} variant='circular' sx={{ width: '300px', height: '300px' }} style={{background: 'linear-gradient(to right bottom, #adc3ef, transparent)'}}/>
      </Grid>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={1} md={1}>
        <Button 
          variant="text" 
          href='#contact'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            color: '#adc3ef',
            transform: 'rotate(90deg)'
          }}
          className={"white__hover"}
        >
            Scroll Down
        </Button>
      </Grid>
      <Grid xs={0} md={1}></Grid>
    </Grid>
  )
}

export default HeaderSocials