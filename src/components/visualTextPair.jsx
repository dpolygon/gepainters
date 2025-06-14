import React from 'react'

export default function VisualTextPair({ imageUrl, text }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <img src={imageUrl} style={{ height: '160px', width: '160px', borderRadius: '50%'}}></img>
            <div style={{padding: '1rem 0 0rem 0rem'}}>
                <h4 style={{color: 'black', transform: 'scaleY(1.1)', fontWeight: '500'}}>{text}</h4>
            </div>
        </div>
    )
}
