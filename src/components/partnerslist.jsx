import React from 'react'
import './partnerslist.css'

export default function Partnerslist() {

const builders = [
  {
    logo: 'images/partnerlogos/partner0.webp',
    link: "https://foursquarebuilders.com/"
  },
  {
    logo: 'images/partnerlogos/partner11.jpg',
    link: "https://stuarthomecorp.com/"
  },
  {
    logo: 'images/partnerlogos/partner1.webp',
    link: "https://jaureguiarchitect.com/"
  },
  {
    logo: 'images/partnerlogos/partner10.jpg',
    link: "https://ca-builders.com/?"
  }, 
  {
    logo: 'images/partnerlogos/partner2.jpg',
    link: "https://tomhobbsco.com/"
  },
  {
    logo: 'images/partnerlogos/partner3.jpg',
    link: "https://www.traviscreekhomes.com/"
  },
  {
    logo: 'images/partnerlogos/partner4.jpg',
    link: "https://www.themuskincompany.com/"
  },
  {
    logo: 'images/partnerlogos/partner5.jpg',
    link: "https://ashcreekhomes.com/"
  },
  {
    logo: 'images/partnerlogos/partner6.jpg',
    link: "https://senderohomes.com"
  },
  {
    logo: 'images/partnerlogos/partner8.jpg',
    link: "https://www.capitexhomes.com/"
  },
  {
    logo: 'images/partnerlogos/partner7.jpg',
    link: "https://www.heylhomes.com/"
  },
  {
    logo: 'images/partnerlogos/partner9.jpg',
    link: "https://www.wildehomes.com/"
  },
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
