import React from 'react';

const ServiceCell = ({title, subtitle, desc, src, icon: Icon}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', width: 'auto', height: 'auto', overflow: 'hidden', backgroundImage: 'linear-gradient(to bottom, white, lightgrey)', boxShadow: 'inset 0 0 10px 2px white', borderRadius: '19px'}}>
        <img style={{margin: '1.25rem', objectFit: 'cover', borderRadius: '15px'}} src={src}></img>
        <h1 style={{margin: '0 1.5rem 1.5rem 1.5rem', fontSize: '3rem', width: '50%', color: 'black'}}>{title}</h1>
        <h3 style={{margin: '0 1.5rem 0 1.5rem', fontWeight: '450', color: 'black'}}>{desc}</h3>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between'}}>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '1.5rem'}}>
                {Icon && <Icon fill='black' style={{width: '25%', fontSize: '2rem'}}/>}
                <h3 style={{marginLeft: '.5rem', color: 'black', fontSize: '1.1rem'}}>{subtitle}</h3>
            </div>
            <h3 style={{margin: '1.5rem', color: 'black', backgroundColor: 'white', padding: '20px', borderRadius: '32px', textAlign: 'center', cursor: 'pointer', boxShadow: '0 0 150px 4px black'}}>Explore</h3>
        </div>
    </div>
  );
};

export default ServiceCell;
