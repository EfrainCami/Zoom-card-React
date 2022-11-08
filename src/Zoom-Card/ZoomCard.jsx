import React from 'react';
import "./ZoomCard.css";

export default function ZoomCard({image, title, description}) {
  return (
    <div className="card">
        <img src={image} alt="Playa" className="card-image"/>
        <div className="info">
            <h3 className="card-title">{title}</h3>
            <p className="description">{description}</p>
        </div>
    </div>
  )
}
