import React from 'react'
import './experience.css'
import {BsPatchCheckFill, BsPatchPlus, BsPatchMinus} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What do I know</h5>
      <h2>Computer Knowledge</h2>

      <div className='container experience__container'>
        <div className='experience__languages'>
          <h3>Languages</h3>
          <div className='experience__content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>Python</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>Typescript</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience_details'>
              <BsPatchPlus className='experience__details-icon'/>
              <h4>Java</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience_details'>
              <BsPatchPlus className='experience__details-icon'/>
              <h4>SQL</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience_details'>
              <BsPatchPlus className='experience__details-icon'/>
              <h4>LaTeX</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience_details'>
              <BsPatchMinus className='experience__details-icon'/>
              <h4>C</h4>
              <small className='text-light'>Novice</small>
            </article>
          </div>
        </div>
        <div className='experience__technologies'>
          <h3>Technologies</h3>
          <div className='experience__content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>PyTorch</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>Tensorflow</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>Sklearn/SciPy</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience_details'>
              <BsPatchPlus  className='experience__details-icon'/>
              <h4>Snowflake</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience_details'>
              <BsPatchPlus  className='experience__details-icon'/>
              <h4>HuggingFace</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience_details'>
              <BsPatchMinus  className='experience__details-icon'/>
              <h4>React</h4>
              <small className='text-light'>Novice</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience