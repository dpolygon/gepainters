import React from 'react'
import { useState, useEffect, useRef } from 'react'
import './carrossel.css'

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";


export default function Carrossel() {
    // Array of image URLs
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const intervalRef = useRef(null);

    const sampleImages = [
        'src/assets/samplework/samp1.jpg',
        'src/assets/samplework/samp2.jpg', 
        'src/assets/samplework/samp3.jpg',
        'src/assets/samplework/samp4.jpg',
        'src/assets/samplework/samp5.jpg'
    ];

    useEffect(() => {
        // Clear any existing interval
        clearInterval(intervalRef.current);

        // If not paused, start the interval
        if (!isPaused) {
            intervalRef.current = setInterval(() => {
            setCurrentImageIndex(prevIndex =>
                prevIndex === sampleImages.length - 1 ? 0 : prevIndex + 1
            );
            }, 3500);
        }

        // Cleanup on unmount or when paused changes
        return () => clearInterval(intervalRef.current);
    }, [isPaused, sampleImages.length]);

    // Function to move to the next image
    const nextImage = () => {
        setCurrentImageIndex(prevIndex =>
            prevIndex === sampleImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Function to move to the previous image
    const prevImage = () => {
        setCurrentImageIndex(prevIndex =>
            prevIndex === 0 ? sampleImages.length - 1 : prevIndex - 1
        );
    };

    const pausePlay = () => {
        setIsPaused(prev => !prev)
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
            <div className='carrossel'>
                    {sampleImages.map((imageUrl, index) => (
                        <div key={index} className={
                            index === currentImageIndex
                                ? 'slide active'
                                : 'slide'}>
                            <img className= "carrossel-image" src={imageUrl} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                <button className='playPauseButton' onClick={pausePlay}>
                    {isPaused === false ? <FaPause className='playPauseIcon'/> : <FaPlay className='playPauseIcon'/>}
                </button>
                <button className= 'prevButton' onClick={prevImage}>
                    <IoIosArrowBack className='carrossel-arrows'/>
                </button>
                <button className= 'nextButton' onClick={nextImage}>
                    <IoIosArrowForward className='carrossel-arrows'/>
                </button>
            </div>
            <h2 style={{color: 'dimgrey', margin: '2rem'}}> The proof is in the <p className='gradient-text' style={{display: 'inline'}}>painting,</p> we'll let our work speak for us.</h2>
        </div>
    )
}
