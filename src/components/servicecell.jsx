// ServiceCell.js
import React from 'react';
import './serviceCell.css';

const ServiceCell = ({ title, subtitle, desc, src, icon: Icon, link }) => {
  return (
    <div className="service-cell">
      <video  loop autoPlay muted playsInline className="service-image" src={src} alt={title} />
      <div className='service-content'>
        <div style={{background: 'rgb(256, 256, 256, .7)', paddingTop:' 1rem', boxShadow: '0 0 80px 70px rgb(256, 256, 256, .75)'}}>
          <div style={{height: '180px'}}>
            <h1 className="service-title">{title}</h1>
            <h3 className="service-desc">{desc}</h3>
          </div>
          <div className="service-footer">
            <div className="service-subtitle-wrapper">
              {Icon && <Icon fill='black' className="service-icon" />}
              <h3 className="service-subtitle">{subtitle}</h3>
            </div>
            {link && (
              <a href={link} className="service-button">
                Explore +
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCell;
