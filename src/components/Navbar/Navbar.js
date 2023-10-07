import React from "react"
import "./Navbar.css"
import {GlobalLogo, GlobalHamburger} from "../../assets/assetsglobal"

const Menu = () => (
  <>
    <p>
      <a href="#about">About</a>
    </p>
    <p>
      <a href="#services">Services</a>
    </p>
    <p>
      <a href="#careers">Careers</a>
    </p>
    <p>
      <a href="#about"> About</a>
    </p>
  </>
)

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-image-container">
        <img src={GlobalLogo} alt="logo" />
      </div>

      {/* Desktop Navbar */}
      <div className="navbar-desktop-container">
        <Menu />
      </div>

      {/* Mobile Navbar */}
      <div className="navbar-mobile-container">
        <div className="navbar-mobile-toggle">
          <img src={GlobalHamburger} alt="hamburger" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
