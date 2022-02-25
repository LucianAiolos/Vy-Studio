import React from 'react';
import './navbar.css'

function Navbar() {
  return (
    <nav className="navbar" id="">
      <div className="logo-div">
        <img src="\imgs\vybrant-F1-1.logo.cropped.png" alt="" />
        {/* <h2>LASHES / NAILS</h2> */}
      </div>
      <div className="nav-links-container">
        <button className="home" id='home'>HOME</button>
        <button className="services">SERVICES</button>
        <button className="gallery">GALLERY</button>
        <button className="my-bookings">MY BOOKINGS</button>
        <button className="contact">CONTACT</button>
        <button className="appointment">APPOINTMENTS</button>
      </div>
    </nav>
  )
    
  
}

export default Navbar;
