import React from 'react';

const ServiceCell = ({title, subtitle, desc, src, icon: Icon}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'end', width: '30vw', height: '70vh', overflow: 'hidden', backgroundImage: 'linear-gradient(to bottom, transparent, dimgrey)', boxShadow: 'inset 0 0 10px 2px white', borderRadius: '19px'}}>
        <div style={{display: 'flex', position: 'absolute', width: '30vw', height: '70vh'}}> 
            <div style={{position: 'absolute', height: '100%', width: '100%', backgroundColor: 'white', borderRadius: '33px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: '-3'}}>
                <img style={{objectFit: 'cover', height: '100%', width: '100%', borderRadius: '25px', border: '5px solid white', zIndex: '-2'}} src={src}></img>
            </div>
        </div>
        <div style={{ borderRadius: '20px', }}>
            <h1 style={{margin: '1.5rem', fontSize: '3rem', width: '100%'}}>{title}</h1>
            <h3 style={{margin: '1.5rem', fontWeight: '500'}}>{desc}</h3>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between'}}>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '1.5rem'}}>
                    {Icon && <Icon style={{width: '25%', fontSize: '3rem'}}/>}
                    <h3 style={{marginLeft: '1rem',}}>{subtitle}</h3>
                </div>
                <h3 style={{margin: '1.5rem', color: 'black', backgroundColor: 'white', padding: '20px', borderRadius: '32px', textAlign: 'center'}}>Explore</h3>
            </div>
        </div>
    </div>
  );
};

export default ServiceCell;
