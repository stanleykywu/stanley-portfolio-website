import { Button, Grid } from '@mui/material'
import React from 'react'
import RESUME from '../../assets/resume.pdf'

const CTA = () => {
  return (
    <Grid container alignItems="center" paddingTop={1} columns={{ xs: 13, sm: 8, md: 15 }}>
      <Grid xs={1} md={5}/>
      <Grid xs={5} md={2}>
        <Button 
          variant="outlined" 
          href={RESUME}
          target="_blank"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            color: '#4db5ff',
          }}
          className={"white__hover"}
        >
          Download Resume
        </Button>
      </Grid>
      <Grid xs={1} md={1}/>
      <Grid xs={5} md={2}>
        <Button 
          variant="contained" 
          href="#contact"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#003e75',
            color: '#4db5ff',
          }}
          className={"white__hover"}
        >
          Let's Talk
        </Button>
      </Grid>
      <Grid xs={1} md={5}/>
    </Grid>
  )
}

export default CTA