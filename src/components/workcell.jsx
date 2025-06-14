import React from 'react'
import './workcell.css'

export default function Workcell({ image, descriptor, title  }) {
    return (
        <div className='job-cell' style={{ backgroundImage: `url(${image})` }}>
            <div style={{boxShadow: '0 0 100px 100px rgb(0, 0, 0, 0.4)', padding: '1.5rem', backgroundColor: 'rgb(0, 0, 0, 0.4)', borderRadius: '48px'}}>
                <h3>{descriptor}</h3>
                <h2 style={{fontSize: '2.5rem'}}>{title}</h2>
            </div>
        </div>
    )
}
