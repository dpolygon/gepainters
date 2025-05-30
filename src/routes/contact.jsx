import React from 'react'

import ContactUsForm from '../components/contactUsForm.jsx'

export default function Contact() {
  return (
    <div style={{ backgroundColor: 'black', height: '100vh', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div style={{width: '60vw', paddingTop: '24rem'}}>
          <ContactUsForm />
        </div>
    </div>
  )
}
