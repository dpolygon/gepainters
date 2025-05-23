import { useState } from 'react'
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';
import { BiSolidHomeHeart } from "react-icons/bi";
import { GoNorthStar } from "react-icons/go";
import { MdAddBusiness } from "react-icons/md";


import ServiceCell from './components/servicecell'
import './App.css'
import Carrossel from './components/carrossel';
import Partnerslist from './components/partnerslist';

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
          <div style={{marginTop: '2rem', display: 'flex', flexDirection: 'row'}}>
            <img style={{height: '60px', width: '60px', marginRight: '10px'}} src='src/assets/logo.svg'></img>
            <h1>G.E. Painters</h1>
          </div>
          <div style={{marginBottom: '2rem'}}>
            <h2 style={{fontSize: '4rem', paddingBottom: '1rem', borderBottomStyle: 'solid', borderBottomWidth: '1px', marginBottom: '1rem'}}>Painting that brings out the best in every space</h2>
            <h4>Serving the Austin area for over 25 years — from homes to high-traffic commercial spaces, we deliver eco-friendly, lasting finishes with expert care.</h4>
          </div>
        </div>
        <div className='services-summary'>
          <h1 style={{ margin: '6rem 0 0 2rem', fontSize: '5rem'}}>Your Space. Our Craft.</h1>
          <div className='services'>
            <ServiceCell src='src/assets/residential.jpg' title='Residential' icon={BiSolidHomeHeart} subtitle='Make your house feel like home inside and out' desc='From modern makeovers to careful restorations, we specialize in custom interior and exterior painting, trim work, and surface repairs that stand the test of time.'/>
            <ServiceCell src='src/assets/commercial.jpg' title='Commercial' icon={MdAddBusiness} subtitle='We help Austin’s businesses look their best' desc='Whether it’s a fresh coat for a retail space, durable finishes for apartments, or precision striping in a parking lot.'/>
            <ServiceCell src='src/assets/other.jpg' title='Specialty Surfaces & Finishes' icon={GoNorthStar} subtitle='More than just paint' desc='From epoxy floors to cabinet refinishing, our team delivers expert finishes on a wide range of surfaces — brick, stucco, siding, metal doors, and more.'/>
          </div>
        </div>
        <div className='choose-gepainters'> 
          <div>
            <h1 style={{color: 'black', fontSize: '5rem'}}>Why<br></br> Settle? <br></br><br></br> Choose</h1>
            <h1 className='gradient-text'  style={{fontSize: '5rem'}}>G.E. Painters</h1>
          </div>
        </div>
        <div className='gepainters-minigallery'>
          <Carrossel/>
        </div>
        <div className='partners-area'>
          <div>
            <h1 style={{color: 'black', width: '74vw'}}>We’ve proudly provided professional painting—and a range of finishing services—to some of the most respected names in Austin homebuilding and design.</h1>
            <Partnerslist/>
          </div>
        </div>
        <div style={{backgroundColor: 'rgb(240, 240, 240)'}}>
          <h2 style={{color: 'black', width: '74vw'}}>At GEPainters, we use only high-quality, professional-grade paint products—or client-specified brands upon request—to ensure long-lasting, beautiful results.
  We stand by our craftsmanship with a standard one-year labor warranty on all completed projects. Your satisfaction is our priority, and we’re committed to getting it right.</h2>
        </div>
        <div className='areas-served'>
          <div className='areas-text'>
            <h2 style={{color: 'black'}}>With over 25 years of experience, we’ve proudly delivered high-quality residential and commercial painting services throughout Austin and the surrounding Central Texas area.</h2>
            <h3 style={{color: 'black'}}>Our work can be found in many of Austin’s most recognized neighborhoods — including Old West Austin, Hyde Park, Zilker, Travis Heights, Mueller, Tarrytown, Rosedale, Northwest Hills, Crestview, Allandale, Bouldin Creek, South Congress, Barton Hills, Windsor Park, Brentwood, and East Austin. We also serve nearby communities such as Georgetown, Buda, San Marcos, Bastrop, Dripping Springs, Pflugerville, Round Rock, Cedar Park, Leander, Kyle, and Lakeway.</h3>
            <h2 style={{color: 'black'}}>We understand that each neighborhood has its own personality and history, and we take pride in tailoring every project to complement its unique character. Whether it’s refreshing a family home or painting a commercial space, we bring attention to detail and a commitment to quality every time.</h2>
            <h2 style={{color: 'black'}}>Not sure if we serve your area or need a custom quote? Feel free to reach out — we’re always happy to answer questions and discuss your project.</h2>
          </div>
        </div>
      </div>
  )
}

export default App
