import React from 'react'

export default function VisualTextPair({ imageUrl, text }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div
                style={{
                    height: '160px',
                    width: '160px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: '200%',
                    backgroundPosition: 'center'
                }}
            ></div>
            <div style={{ padding: '1rem 0 0rem 0rem' }}>
                <h4 style={{ color: 'black', fontWeight: '500', textAlign: 'center' }}>{text}</h4>
            </div>
        </div>
    )
}
