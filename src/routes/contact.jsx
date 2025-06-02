import React from 'react'
import './contact.css'
import { useEffect } from 'react'

import ContactUsForm from '../components/contactUsForm.jsx'
import { GradientAnimation } from '../utils/gradientanimation.jsx'

export default function Contact() {

  useEffect(() => {
    const cleanup = GradientAnimation();
    return cleanup; // stop interval on unmount
  }, []);

  return (
    <div className='contact-us' style={{ height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', backdropFilter: 'blur(2000px)' }}>
      <div  style={{ width: '60vw', paddingTop: '20rem'}}>
        <ContactUsForm />
      </div>
    </div>
  )
}
