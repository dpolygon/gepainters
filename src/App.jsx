import { useState } from 'react'
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';
import { TbHomeHeart } from "react-icons/tb";
import { GoNorthStar } from "react-icons/go";
import { MdAddBusiness } from "react-icons/md";


import ServiceCell from './components/servicecell'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const position = {lat: 30.2672, lng: -97.7421};
  const google_api_key = 'AIzaSyAfBQOwVbqM7dFMmvurj2PaZIfP0JTAj2o';

  return (
      <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
        <div className='homesplash'>
          <video loop autoPlay muted className='homepage-broll'>
            <source src='src/assets/May Hero on Vimeo.mp4' type='video/mp4'/>
          </video>
          <h1 style={{marginTop: '2rem'}}>GEPainters</h1>
          <div style={{marginBottom: '2rem'}}>
            <h2 style={{fontSize: '4rem', paddingBottom: '1rem', borderBottomStyle: 'solid', borderBottomWidth: '1px', marginBottom: '1rem'}}>Painting that brings out the best in every space</h2>
            <h4>Serving the Austin area for over 20 years — from homes to high-traffic commercial spaces, we deliver eco-friendly, lasting finishes with expert care.</h4>
          </div>
        </div>
        <div className='services-summary'>
          <h1>Services We Offer</h1>
          <div className='services'>
            <ServiceCell src='src/assets/residential.jpg' title='Residential' icon={TbHomeHeart} subtitle='Make your house feel like home inside and out' desc='From modern makeovers to careful restorations, we specialize in custom interior and exterior painting, trim work, and surface repairs that stand the test of time.'/>
            <ServiceCell src='src/assets/commercial.jpg' title='Commercial' icon={MdAddBusiness} subtitle='We help Austin’s businesses look their best' desc='Whether it’s a fresh coat for a retail space, durable finishes for apartments, or precision striping in a parking lot.'/>
            <ServiceCell src='src/assets/other.jpg' title='Specialty Surfaces & Finishes' icon={GoNorthStar} subtitle='More than just paint' desc='From epoxy floors to cabinet refinishing, our team delivers expert finishes on a wide range of surfaces — brick, stucco, siding, metal doors, and more.'/>
          </div>
        </div>
      </div>
  )
}

export default App
