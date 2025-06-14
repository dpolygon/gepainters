// ServiceCell.js
import React from 'react';
import './serviceCell.css';

const ServiceCell = ({ title, subtitle, desc, src, icon: Icon, link }) => {
  return (
    <div className="service-cell">
      <img className="service-image" src={src} alt={title} />
      <h1 className="service-title">{title}</h1>
      <h3 className="service-desc">{desc}</h3>
      <div className="service-footer">
        <div className="service-subtitle-wrapper">
          {Icon && <Icon fill='black' className="service-icon" />}
          <h3 className="service-subtitle">{subtitle}</h3>
        </div>
        {link && (
          <a href={link} className="service-button">
            Explore
          </a>
        )}
      </div>
    </div>
  );
};

export default ServiceCell;
