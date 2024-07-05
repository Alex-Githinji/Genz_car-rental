import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <h1>GenZ Cars</h1>
      <nav className="navbar">
        <ul>
          <li className="navbar-item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/vehicles">Vehicles</Link>
          </li>
          <li className="navbar-item">
            <Link to="/Booking">Booking</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
