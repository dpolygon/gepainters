import React from 'react'
import VisualTextPair from './visualTextPair.jsx'

export default function VisualTextPairList({ data }) {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr)', gap: '2rem' }}>
            {data.map((data, index) => (
                <VisualTextPair imageUrl={data.imageUrl} text={data.title} subtext={data.descriptor}/>
            ))}
        </div>
    )
}


// display: grid;
//     justify-items: center;
//     grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));