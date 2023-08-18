import { Box } from '@mui/material'
import React from 'react'

const CTA = () => {
  return (
    <Box bgcolor="#E5EDF1" sx={{ borderRadius: '16px', margin: '35px', padding: '5px'}}>
      <h4><b>FRESH OFF THE PRESS</b></h4>
      <i>"Calling all artists, we recently deployed a web version for Glaze. Please check it out on our <a href='https://glaze.cs.uchicago.edu/webglaze.html' target="_blank" rel="noreferrer" style={{textDecoration: 'underline', color: 'black'}}>Glaze homepage</a>!"</i>
      <br></br>
      <i>~ Stanley</i>
      
    </Box>
  )
}

export default CTA