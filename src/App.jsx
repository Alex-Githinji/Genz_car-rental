import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer.jsx";
import Home from "./pages/home/Home.jsx";
import Vehicles from "./pages/Vehicles/Vehicles.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Booking from "./pages/booking/Booking.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Vehicles" element={<Vehicles />} />
          <Route path="Booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
