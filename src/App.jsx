import { useState } from 'react'
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';

import Navbar from './components/navbar';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const position = {lat: 30.2672, lng: -97.7421};
  const google_api_key = 'AIzaSyAfBQOwVbqM7dFMmvurj2PaZIfP0JTAj2o';

  return (
    <div style={{margin:  '2rem'}}>
      <div>
        <div style={{display: 'flex', flexDirection: 'horizontal', justifyContent: 'space-between', alignItems: 'center'}}>            
          <h1 className='companyName'>ge painters</h1>
          <div className='primary-navbar'>
            <Navbar/>
          </div>
        </div>
        <div style={{width: '50vw'}}>
          <h1 className='companyDesc'>Painting & Renovation in Central Texas</h1>
          <div className='secondary-navbar' style={{marginBottom: '40px'}}>
            <Navbar/>
          </div>
          <h1 className='companyServiceReach'>Serving Austin and the greater Austin metropolitan area</h1>
          <h1 className='companyServiceReach' style={{marginBottom: '60px'}}>including Georgetown, Buda, San Marcos, Bastrop, Dripping Springs, Pflugerville, Round Rock, Cedar Park, Leander, Kyle, and Lakeway.</h1>
          <APIProvider apiKey={google_api_key}>
            <Map
              style={{width: '40vw', height: '40vh', borderRadius: '33px'}}
              defaultCenter={position}
              defaultZoom={9}
              gestureHandling={'none'}
              disableDefaultUI={true}
            />
          </APIProvider>
        </div>
      </div>
    </div>
  )
}

export default App
