import React from 'react'
import '../../../index.css'
import { Container } from '@mui/material'

const Research = () => {
  return (
    <Container id='about' align='center' sx={{ overflow: 'auto' }}>
      <div>
        <h5 className="text__light__top">Research</h5>
        <h2 style={{ marginBottom: 30 }}>Publications</h2>
      </div>
      <Container>
        <p>
          <strong>How to Combine Membership-Inference Attacks on Multiple Updated Models<br/>
          </strong>Matthew Jagielski, Stanley Wu, Alina Oprea, Jonathan Ullman, Roxana Geambasu<br/>
          <em>Privacy Enhancing Technologies Symposium (PETs), 2023 (in review)</em><br/>[<a style={{ "color": "#adc3ef" }} target="_blank" without rel="noreferrer" href="https://arxiv.org/abs/2205.06369">link</a>]
        </p>
      </Container>
    </Container>
  )
}

export default Research