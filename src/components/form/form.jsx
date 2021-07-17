// @ts-nocheck
import treatmentData from './treatementData'
import './form.css'
import Select from '../../components/treatmentDropDown/treatmentDropDown'
import CalendarInput from '../../components/CalendarInput/calendarInput'
import TimeInput from '../../components/timePicker/timePicker'
import thankYouText from '../../assets/svg/thankYou.svg'
import redFacebookIcon from '../../assets/svg/redFacebook.svg'
import redInstagramIcon from '../../assets/svg/redInstagram.svg'
import redEmailIcon from '../../assets/svg/redEmail.svg'

import React, { useState } from 'react'

const Form = () => {
  const [isSubmitted, setSubmissionStatus] = useState(false)
  const formInputs = [
    {
      type: 'text',
      placeHolder: 'Full name',
      hasDropDown: false
    },

    {
      type: 'email',
      placeHolder: 'Email Address',
      hasDropDown: false
    },
    {
      type: 'text',
      placeHolder: 'Phone number',
      hasDropDown: false
    }
  ]

  return (
    <div
      className='form-container'
      style={isSubmitted ? { height: '35rem' } : { height: '135rem' }}
    >
      {isSubmitted ? (
        <div className='form-thankyou-overlay animate__animated animate__fadeIn'>
          <img src={thankYouText} alt='' />
          <p>
            Thank you for submitting your enquiry, one of our team will be in
            touch with you soon.
          </p>
        </div>
      ) : null}
      <header className='header'>
        {' '}
        Fill in the form below to start your journey to doubling your beauty
      </header>

      <div className='form'>
        {formInputs.map(formInput => {
          return (
            <div className='form-input-container'>
              <input
                className='form-input'
                type={formInput.type}
                placeholder={formInput.placeHolder}
              />
            </div>
          )
        })}
        <div className='form-input-container'>
          
          <Select
            className='form-input'
            name='treatement'
            data={treatmentData}
            onChange={() => {}}
          ></Select>
        </div>

        <div className='form-input-container'>
          <TimeInput name='time' onChange={() => {}}></TimeInput>
        </div>
        <div className='form-input-container'>
          <CalendarInput name='date' onChange={() => {}}></CalendarInput>
        </div>
        <div className='form-input-container'>
          <textarea
            className='form-input form-text-area'
            placeholder='Enquiry'
          ></textarea>
        </div>

        <button
          className='form-button'
          onClick={() => setSubmissionStatus(true)}
        >
          Submit Now
        </button>

        <div className='form-socialmedia-bar'>
          <a href='#'>
            <img src={redEmailIcon} alt='' />
          </a>
          <a href='#'>
            <img src={redInstagramIcon} alt='' />
          </a>
          <a href='#'>
            <img src={redFacebookIcon} alt='' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Form
