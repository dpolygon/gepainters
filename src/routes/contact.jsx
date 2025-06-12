import React from 'react'
import './contact.css'
import { useEffect } from 'react'

import ContactUsForm from '../components/contactUsForm.jsx'

export default function Contact() {

  return (
    <div className='contact-us' style={{ display: 'flex', flexDirection: 'column', paddingTop: '12rem' }}>
      <h1 style={{ color: 'black', fontSize: 'clamp(3rem, 8vw, 5rem)', textAlign: 'left' }}>Contact Us</h1>
      <h3 style={{ color: 'black', paddingTop: '1rem'}}>Interested in working with us? Want a free estimate?
        Please fill out the form below to help Lupe get a general idea of your project. Every job is unique, and full details will be discussed over the phone or in person — this just helps us get a head start.</h3>
      <div className='contactus-form-wrapper'>
        <ContactUsForm />
      </div>
      <h3 style={{ textAlign: 'center' }}>Submitting this form is like making the first phone call — it shows serious intent, and helps Lupe be ready to talk about your project during your consultation.</h3>
      <p style={{ paddingTop: '1rem', textAlign: 'center' }}>
        Prefer to talk directly to Lupe? Tap any option below when you’re ready — let’s bring your vision to life!
      </p>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: '1rem', height: '3rem'}}>
        <a href="sms:5125551234" className='contact-button'>Text 💬</a>
        <a href="tel:5125551234" className='contact-button' style={{ marginLeft: '0.5rem'}}>Call 📞</a>
      </div>

    </div>
  )
}
