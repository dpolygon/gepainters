import React from 'react'
import './residential.css'
import Workcell from '../components/workcell'
import Workcarrossel from '../components/workcarrossel'

import interiorExteriorJobs from '../../src/data/interiorAndExterior.json'
import surfacePrep from '../../src/data/surfacePrep.json'
import concreteGarage from '../../src/data/concreteAndGarage.json'
import decksFencesExterior from '../../src/data/decksFencesExteriors.json'

export default function Residential() {
  return (
    <div style={{padding: '12rem 0rem 5rem 0rem'}}>
      <h1 className='residential-main-title'>Residential Services</h1>
      <h3 style={{padding: '1rem 1rem 3rem 5rem', color: 'gray'}}>At GE Painter, we bring craftsmanship, reliability, and attention to detail to every residential project. Whether you’re updating your home’s interior, enhancing curb appeal, or starting from the ground up, we offer a comprehensive range of services to meet your needs.</h3>
      
      <h1 className='residential-title'>Interior & Exterior Painting</h1>
      <h3 className='residential-subtitle'>We use high-quality paints and proven techniques to ensure a long-lasting and beautiful result. Whether it's a repaint project or a brand-new space, we prepare every surface carefully and clean up thoroughly.</h3>
      <div className='residential-work-carrossel'>
        <Workcarrossel data={interiorExteriorJobs}/>
      </div>

      <h1 className='residential-title'>Surface Prep</h1>
      <h3 className='residential-subtitle'>Before we paint, we make sure surfaces are structurally sound and ready to shine. These preparatory services ensure our finishes last and your home looks its best.</h3>
      <div className='residential-work-carrossel'>
        <Workcarrossel data={surfacePrep}/>
      </div>

      <h1 className='residential-title'>Concrete & Garage Floor Finishes</h1>
      <h3 className='residential-subtitle'>Give your garage, patio, or basement a sleek and durable upgrade. We use industrial-grade materials built to resist peeling, chemicals, and heavy use.</h3>
      <div className='residential-work-carrossel'>
        <Workcarrossel data={concreteGarage}/>
      </div>

      <h1 className='residential-title'>Decks, Fences & Exteriors</h1>
      <h3 className='residential-subtitle'>Extend your living space and protect your property with quality finishes:</h3>
      <div className='residential-work-carrossel'>
        <Workcarrossel data={decksFencesExterior}/>
      </div>

    </div>
  )
}
