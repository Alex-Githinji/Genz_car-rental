import React from "react";
import { vehicleData } from "./VehicleData.jsx";
import { useNavigate } from "react-router-dom";
import Vehicle from "./Vehicle.jsx";

function Vehicles() {
  const navigate = useNavigate();

  const handleBookingClick = (vehicle) => {
    navigate("/booking", {
      state: {
        vehicle: {
          image: vehicle.image,
          type: vehicle.type,
          model: vehicle.model,
          description: vehicle.description,
          price: vehicle.price,
        },
      },
    });
  };

  return (
    <section>
      <div className="vehicles-banner">
        <h3>
          Gen z cars offers a secure, verified and transparent platform where
          cars can be traded however we are only liable for transactions made
          through the GenZ_Cars offices and we don’t bear responsibility for
          third party transactions done outside our offices even in cases where
          a vehicle has been advertised on our website. Contact us via
          +254792832908 for any clarification.
        </h3>
      </div>
      <div className="vehicles">
        {vehicleData.map((vehicle, index) => (
          <div className="vehicle" key={index}>
            <Vehicle
              image={vehicle.image}
              type={vehicle.type}
              model={vehicle.model}
              description={vehicle.description}
              price={vehicle.price}
            />
            <button onClick={() => handleBookingClick(vehicle)}>Book car</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Vehicles;
