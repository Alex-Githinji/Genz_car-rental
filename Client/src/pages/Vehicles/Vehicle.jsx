import React from "react";
import "./vehicles.css"

const Vehicle = ({ image, type, model, description, price }) => {
  return (
    <div className="vehicle-item">
      <img src={image} alt={type} />
      <h4>{type}</h4>
      <p>{model}</p>
      <p>{description}</p>
      <p  className="price">{price}</p>
      
    </div>
  );
};

export default Vehicle;
