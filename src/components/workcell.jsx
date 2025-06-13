import React from 'react'
import './workcell.css'

export default function Workcell({ image, descriptor, title  }) {
    return (
        <div className='job-cell' style={{ backgroundImage: `url(${image})` }}>
            <h3>{descriptor}</h3>
            <h2 style={{fontSize: '2.5rem'}}>{title}</h2>
        </div>
    )
}
