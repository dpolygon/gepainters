import React from 'react'
import './residential.css'
import Workcarrossel from '../components/workcarrossel'

import commercialLocations from '../../src/data/commercialLocations.json'
import propertyTypes from '../../src/data/propertyTypes.json'
import beyondWalls from '../../src/data/beyondWalls.json'
import highTraffic from '../../src/data/highTraffic.json'

export default function Commercial() {
  return (
    <div>
      <div className="residential-hero-banner" style={{ backgroundImage: `url('/images/samplework/open.avif')`}}>
        <div style={{ padding: '0 0 6rem 1rem' }}>
          <div style={{boxShadow: '0 0 80px 75px rgb(0, 0, 0, .5)', backgroundColor: 'rgb(0, 0, 0, .5)', borderRadius: '80px', width: '70vw' }}>
            <h1 className='residential-main-title'>Commercial Services</h1>
            <h3 className="residential-intro">
              We understand the demands of commercial environments. Whether you’re operating a high-traffic storefront or managing a portfolio of properties, we provide professional, reliable painting and surface services tailored to your business needs.              </h3>
          </div>
        </div>

      </div>

      <div className='service-theme'>
        <h1 className='residential-title'>Interior & Exterior Commercial Painting</h1>
        <h3 className='residential-subtitle'>We deliver high-quality finishes on time and with minimal disruption to operations:</h3>
        <div className='residential-work-carrossel'>
          <Workcarrossel data={commercialLocations} />
        </div>
        <h4 className='multihome-options' style={{ display: 'flex', justifyContent: 'center', color: 'black', textAlign: 'center', margin: '3rem', background: 'rgb(0, 0, 0, .05)', borderRadius: '32px' }}><p style={{ color: 'black', width: '75%' }}>From bold branding colors to neutral modern refreshes, we help businesses make the right impression.</p></h4>
      </div>

      <div className='service-theme' style={{ backgroundColor: 'rgb(0, 0, 0, .05)' }}>
        <h1 className='residential-title'>Property Management & Multi-Unit Support</h1>
        <h3 className='residential-subtitle'>We partner with property managers and real estate investors to maintain and upgrade:</h3>
        <div className='residential-work-carrossel'>
          <Workcarrossel data={propertyTypes} />
        </div>
      </div>

      <div className='service-theme'>
        <h1 className='residential-title'>Floor, Surface & Exterior Solutions</h1>
        <h3 className='residential-subtitle'>Beyond walls, we enhance functionality and safety:</h3>
        <div className='residential-work-carrossel'>
          <Workcarrossel data={beyondWalls} />
        </div>
      </div>

      <div className='service-theme' style={{ backgroundColor: 'rgb(0, 0, 0, .05)' }}>
        <h1 className='residential-title'>Facility Maintenance Painting</h1>
        <h3 className='residential-subtitle'>Repainting and refreshing high-traffic areas that see the most wear—because first impressions and clean spaces matter:</h3>
        <div className='residential-work-carrossel'>
          <Workcarrossel data={highTraffic} />
        </div>
      </div>

      <div className='residential-call-exit' style={{ textAlign: 'center', backgroundColor: 'black', padding: '1rem', height: '20vh', alignContent: 'end' }}>
        <h3>
          <p style={{ display: 'inline', fontSize: 'clamp(12px, 2vw, 1.5rem' }}>Need help deciding what your home needs? Reach out today and let’s make a plan together! </p>
          <a href='/contact' style={{ display: 'inline', whiteSpace: 'nowrap', fontSize: 'clamp(2rem, 4vw, 3rem)', fontStyle: 'italic', fontWeight: 'bolder' }}>Contact us →</a>
        </h3>
      </div>

    </div>
  )
}
