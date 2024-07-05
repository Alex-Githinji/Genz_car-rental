import React from "react";
import { Link } from "react-router-dom";
import { Vehicle } from "./Vehicle.jsx";
import "./vehicles.css";
import audi from "../../assets/audi.jpg";
import porsche from "../../assets/porsche.jpg";
import jaguar from "../../assets/jaguar.jpg";
import range from "../../assets/range vogue.jpg";
import bently from "../../assets/bently.jpg";
import GLE from "../../assets/benz GLE.jpg";
import c200 from "../../assets/c200.jpg";
import hyundai from "../../assets/hyundai.jpg";
import lexus from "../../assets/lexus.jpg";
import lambo from "../../assets/Lambo.jpg";
import note from "../../assets/note.jpg";
import subaru from "../../assets/subaru.jpg";
import volvo from "../../assets/volvo.jpg";
import polo from "../../assets/polo.jpg";
import fielder from "../../assets/fielder.jpg";
import mazda from "../../assets/mazda.jpg";
import bmw from "../../assets/bmw.jpg";
import honda from "../../assets/honda.jpg";
import crown from "../../assets/crown.jpg";
import hatsu from "../../assets/hatsu.jpg";

function Vehicles() {
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
        <div className="vehicle">
          <Vehicle
            image={subaru}
            type="AudI Q5"
            model="3000cc  Automatic"
            description="Specs include a 1.4L Turbocharged Petrol Engine driving the front wheels, Audi MMI infotainment system, Multifunctional steering wheel, dual zone climate controls, and rear mounted spoiler"
            price="ksh 6,500 Per day"
          />
        </div>
        <div className="vehicle">
          <Vehicle
            image={porsche}
            type="porsche GTS"
            model="3000cc  Automatic"
            description="Specs include a 1.4L Turbocharged Petrol Engine driving the front wheels, Audi MMI infotainment system, Multifunctional steering wheel, dual zone climate controls, and rear mounted spoiler"
            price="ksh 8,000 Per day"
          />
        </div>
        <div className="vehicle">
          <Vehicle
            image={jaguar}
            type="Jaguar"
            model="3000cc  Automatic"
            description="Specs include a 1.4L Turbocharged Petrol Engine driving the front wheels, Audi MMI infotainment system, Multifunctional steering wheel, dual zone climate controls, and rear mounted spoiler"
            price="ksh 7,500 Per day"
          />
        </div>
        <div className="vehicle">
          <Vehicle
            image={bently}
            type="Bently"
            model="3000cc  Automatic"
            description="Specs include a 1.4L Turbocharged Petrol Engine driving the front wheels, Audi MMI infotainment system, Multifunctional steering wheel, dual zone climate controls, and rear mounted spoiler"
            price="ksh 10,000 Per day"
          />
        </div>
        <div className="vehicle">
          <Vehicle
            image={range}
            type="Range Vogue"
            model="3000cc  Automatic"
            description="Specs include a 1.4L Turbocharged Petrol Engine driving the front wheels, Audi MMI infotainment system, Multifunctional steering wheel, dual zone climate controls, and rear mounted spoiler"
            price="ksh 9,500 Per day"
          />
        </div>
        <div className="vehicle">
          <Vehicle
            image={GLE}
            type="Benz GLE"
            model="3000cc  Automatic"
            description="Specs include a 1.4L Turbocharged Petrol Engine driving the front wheels, Audi MMI infotainment system, Multifunctional steering wheel, dual zone climate controls, and rear mounted spoiler"
            price="ksh 9,200 Per day"
          />
        </div>
        <div className="vehicle">
          <Vehicle
            image={note}
            type="Nissan Note"
            model="1800cc  Automatic"
            description="Specs include a 1.4L Turbocharged Petrol Engine driving the front wheels, Audi MMI infotainment system, Multifunctional steering wheel, dual zone climate controls, and rear mounted spoiler"
            price="ksh 5,500 Per day"
          />
        </div>
        <div className="vehicle">
          <Vehicle
            image={range}
            type="Range Vogue"
            model="3000cc  Automatic"
            description="Specs include a 1.4L Turbocharged Petrol Engine driving the front wheels, Audi MMI infotainment system, Multifunctional steering wheel, dual zone climate controls, and rear mounted spoiler"
            price="ksh 9,500 Per day"
          />
        </div>
        <div className="vehicle">
          <Vehicle
            image={lambo}
            type="Lamborgini Urus"
            model="3000cc  Automatic"
            description="Specs include a 1.4L Turbocharged Petrol Engine driving the front wheels, Audi MMI infotainment system, Multifunctional steering wheel, dual zone climate controls, and rear mounted spoiler"
            price="ksh 18,000 Per day"
          />
        </div>
        <div className="vehicle">
          <Vehicle
            image={lexus}
            type="Lexus LS460"
            model="3000cc  Automatic"
            description="Specs include a 1.4L Turbocharged Petrol Engine driving the front wheels, Audi MMI infotainment system, Multifunctional steering wheel, dual zone climate controls, and rear mounted spoiler"
            price="ksh 10,500 Per day"
          />
        </div>
        <div className="vehicle">
          <Vehicle
            image={volvo}
            type="Volvo XC60"
            model="3000cc  Automatic"
            description="Specs include a 1.4L Turbocharged Petrol Engine driving the front wheels, Audi MMI infotainment system, Multifunctional steering wheel, dual zone climate controls, and rear mounted spoiler"
            price="ksh 9,500 Per day"
          />
        </div>
        <div className="vehicle">
          <Vehicle
            image={polo}
            type="Volkswagen polo"
            model="3000cc  Automatic"
            description="Specs include a 1.4L Turbocharged Petrol Engine driving the front wheels, Audi MMI infotainment system, Multifunctional steering wheel, dual zone climate controls, and rear mounted spoiler"
            price="ksh 6,500 Per day"
          />
        </div>
        <div className="vehicle">
          <Vehicle
            image={fielder}
            type="Toyota Fielder"
            model="3000cc  Automatic"
            description="Specs include a 1.4L Turbocharged Petrol Engine driving the front wheels, Audi MMI infotainment system, Multifunctional steering wheel, dual zone climate controls, and rear mounted spoiler"
            price="ksh 4,500 Per day"
          />
        </div>
        <div className="vehicle">
          <Vehicle
            image={mazda}
            type="Mazda Axela"
            model="3000cc  Automatic"
            description="Specs include a 1.4L Turbocharged Petrol Engine driving the front wheels, Audi MMI infotainment system, Multifunctional steering wheel, dual zone climate controls, and rear mounted spoiler"
            price="ksh 4,500 Per day"
          />
        </div>
        <div className="vehicle">
          <Vehicle
            image={bmw}
            type="Bmw 320i"
            model="3000cc  Automatic"
            description="Specs include a 1.4L Turbocharged Petrol Engine driving the front wheels, Audi MMI infotainment system, Multifunctional steering wheel, dual zone climate controls, and rear mounted spoiler"
            price="ksh 7,500 Per day"
          />
        </div>
        <div className="vehicle">
          <Vehicle
            image={honda}
            type="Honda CR-Z"
            model="3000cc  Automatic"
            description="Specs include a 1.4L Turbocharged Petrol Engine driving the front wheels, Audi MMI infotainment system, Multifunctional steering wheel, dual zone climate controls, and rear mounted spoiler"
            price="ksh 6,500 Per day"
          />
        </div>
        <div className="vehicle">
          <Vehicle
            image={crown}
            type="Toyota crown"
            model="3000cc  Automatic"
            description="Specs include a 1.4L Turbocharged Petrol Engine driving the front wheels, Audi MMI infotainment system, Multifunctional steering wheel, dual zone climate controls, and rear mounted spoiler"
            price="ksh 5,500 Per day"
          />
        </div>
        <div className="vehicle">
          <Vehicle
            image={hatsu}
            type="Daihatsu"
            model="3000cc  Automatic"
            description="Specs include a 1.4L Turbocharged Petrol Engine driving the front wheels, Audi MMI infotainment system, Multifunctional steering wheel, dual zone climate controls, and rear mounted spoiler"
            price="ksh 5,500 Per day"
          />
        </div>
      </div>
    </section>
  );
}

export default Vehicles;
