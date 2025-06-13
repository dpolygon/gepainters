import React, { useRef } from 'react'
import './workcarrossel.css'

import Workcell from './workcell.jsx'

export default function Workcarrossel({ data }) {
    const scrollRef = useRef();

    const scrollByRem = (rem) => {
        const remInPx = parseFloat(getComputedStyle(document.documentElement).fontSize);
        const pixelAmount = rem * remInPx;
        scrollRef.current.scrollLeft += pixelAmount;
    };

    return (
        <div>
            <div ref={scrollRef} className='work-carrossel'>
                {data.map((work, index) => (
                    <Workcell
                        key={index}
                        image={work.imageUrl}
                        descriptor={work.descriptor}
                        title={work.title}
                    />
                ))}
            </div>
            <div className="carousel-button-wrapper">
                <button className='work-carrossel-buttons' onClick={() => scrollByRem(-25)}>←</button>
                <button className='work-carrossel-buttons' onClick={() => scrollByRem(25)}>→</button>
            </div>
        </div>
    )
}
