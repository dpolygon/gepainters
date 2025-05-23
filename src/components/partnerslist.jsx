import React from 'react'
import './partnerslist.css'

export default function Partnerslist() {

const builders = [
  {
    logo: 'src/assets/partnerlogos/partner0.webp',
    link: "https://foursquarebuilders.com/"
  },
  {
    logo: 'src/assets/partnerlogos/partner1.webp',
    link: "https://jaureguiarchitect.com/"
  },
  {
    logo: 'src/assets/partnerlogos/partner2.jpg',
    link: "https://tomhobbsco.com/"
  },
  {
    logo: 'src/assets/partnerlogos/partner3.jpg',
    link: "https://www.traviscreekhomes.com/"
  },
  {
    logo: 'src/assets/partnerlogos/partner4.jpg',
    link: "https://www.themuskincompany.com/"
  },
  {
    logo: 'src/assets/partnerlogos/partner5.jpg',
    link: "https://ashcreekhomes.com/"
  },
  {
    logo: 'src/assets/partnerlogos/partner6.jpg',
    link: "https://senderohomes.com"
  },
  {
    logo: 'src/assets/partnerlogos/partner7.jpg',
    link: "https://www.heylhomes.com/"
  },
  {
    logo: 'src/assets/partnerlogos/partner8.jpg',
    link: "https://www.capitexhomes.com/"
  },
  {
    logo: 'src/assets/partnerlogos/partner9.jpg',
    link: "https://www.wildehomes.com/"
  },
  {
    logo: 'src/assets/partnerlogos/partner10.jpg',
    link: "https://ca-builders.com/?"
  }, 
  {
    logo: 'src/assets/partnerlogos/partner11.jpg',
    link: "https://stuarthomecorp.com/"
  }
];


  return (
    <div className='partners-list'>
      {builders.map((builder, index) => (
        <a href={builder.link} target="_blank" rel="noopener noreferrer">
          <img className= "partner-logo" src={builder.logo} alt={`Slide ${index + 1}`} />
        </a>
      ))}
    </div>
  )
}
