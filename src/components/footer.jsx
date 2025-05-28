import React from 'react'

import './footer.css'

export default function Footer() {
  return (
    <div className='footer'>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1 style={{fontSize: 'clamp(2rem, 10vw, 10rem)'}}>G.E. PAINTERS, INC.</h1>
            <h2 style={{fontSize: 'clamp(1rem, 5vw, 5rem)', fontWeight: '300', fontStretch: 'expanded'}}>COMMERCIAL & RESIDENTIAL</h2>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', textAlign: 'center', height: 'clamp(180px, 28vw, 600px)', width: '100%', alignItems: 'center'}}>
            <img src='src/assets/logo.svg' style={{height: '100%', width: '100%', objectFit: 'contain'}}/>
        </div>
        <div style={{fontSize: 'clamp(12px, 1vw, 1rem)'}}>
          2025 G.E. Painters & <a href='https://lonestardev.net' style={{display: 'inline'}}>LoneStarDev.</a> All Rights Reserved.
        </div>
</div>
  )
}
