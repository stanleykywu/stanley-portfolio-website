import { Button, Grid } from '@mui/material'
import React from 'react'
import RESUME from '../../../assets/resume.pdf'

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
            backgroundColor: '#4f6b9c',
            color: '#f2f9ff',
            borderColor: 'transparent'
          }}
          className={"slight__hover"}
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
            backgroundColor: '#adc3ef',
            color: '#002647',
          }}
          className={"slight__hover"}
        >
          Let's Talk
        </Button>
      </Grid>
      <Grid xs={1} md={5}/>
    </Grid>
  )
}

export default CTA