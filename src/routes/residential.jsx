import React from 'react'
import './residential.css'
import Workcarrossel from '../components/workcarrossel'

import interiorExteriorJobs from '../../src/data/interiorAndExterior.json'
import surfacePrep from '../../src/data/surfacePrep.json'
import concreteGarage from '../../src/data/concreteAndGarage.json'
import decksFencesExterior from '../../src/data/decksFencesExteriors.json'
import materials from '../../src/data/materials.json'
import VisualTextPairList from '../components/visualTextPairList'

export default function Residential() {
  return (
    <div style={{ padding: '12rem 0rem 0rem 0rem' }}>
      <h1 className='residential-main-title'>Residential Services</h1>
      <h3 style={{ padding: '1rem 1rem 3rem 4rem', color: 'gray', width: '60%' }}>At GE Painter, we bring craftsmanship, reliability, and attention to detail to every residential project. Whether you’re updating your home’s interior, enhancing curb appeal, or starting from the ground up, we offer a comprehensive range of services to meet your needs.</h3>

      <h1 className='residential-title'>Whole-Home & Major Painting Projects</h1>
      <h3 className='residential-subtitle'>We use high-quality paints and proven techniques to ensure a long-lasting and beautiful result. Whether it's a repaint project or a brand-new space, we prepare every surface carefully and clean up thoroughly.</h3>
      <div className='residential-work-carrossel'>
        <Workcarrossel data={interiorExteriorJobs} />
      </div>

      <h1 className='residential-title'>Surface Prep</h1>
      <h3 className='residential-subtitle'>Before we paint, we make sure surfaces are structurally sound and ready to shine. These preparatory services ensure our finishes last and your home looks its best.</h3>
      <div className='residential-work-carrossel'>
        <Workcarrossel data={surfacePrep} />
      </div>

      <h1 className='residential-title'>Concrete & Garage Floor Finishes</h1>
      <h3 className='residential-subtitle'>Give your garage, patio, or basement a sleek and durable upgrade. We use industrial-grade materials built to resist peeling, chemicals, and heavy use.</h3>
      <div className='residential-work-carrossel'>
        <Workcarrossel data={concreteGarage} />
      </div>

      <h1 className='residential-title'>Exterior Enhancements</h1>
      <h3 className='residential-subtitle'>Extend your living space and protect your property with quality finishes:</h3>
      <div className='residential-work-carrossel'>
        <Workcarrossel data={decksFencesExterior} />
      </div>

      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h1 style={{color: 'black', textAlign: 'center', margin: '0 1rem 0 1rem'}}>Surfaces & Materials We Specialize In</h1>
        <h2 style={{color: 'dimgray', textAlign: 'center', width: '70%', marginTop: '1rem'}}>Whether painting, sealing, or refinishing, we know how to treat each surface for optimal appearance and longevity.</h2>
        <div style={{ padding: '5rem 0 5rem 0', width: '85%'}}>
          <VisualTextPairList data={materials} />
        </div>
      </div>

      <div style={{ textAlign: 'center', backgroundColor: 'black', padding: '1rem' }}>
        <h3>
          <p style={{ display: 'inline', fontSize: 'clamp(12px, 2vw, 1.5rem' }}>Turn your vision into reality — it begins with a free estimate. </p>
          <a href='/contact' style={{ display: 'inline', whiteSpace: 'nowrap', fontSize: 'clamp(2rem, 4vw, 3rem)', fontStyle: 'italic', fontWeight: 'bolder' }}>Contact us →</a>
        </h3>
      </div>

    </div>
  )
}
