import React from "react"
import "./Navbar.css"
import {GlobalLogo, GlobalHamburger} from "../../assets/assetsglobal"

const Menu = () => {
  return (
    <>
      <p>
        <a href="#About"></a>
      </p>
      <p>
        <a href="#Services"></a>
      </p>
      <p>
        <a href="#About"></a>
      </p>
      <p>
        <a href="#About"></a>
      </p>
    </>
  )
}

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-image-container">
        <img src={GlobalLogo} alt="logo" />
      </div>
      <div className="navbar-mobile-container">
        <div className="navbar-mobile-toggle">
          <img src={GlobalHamburger} alt="hamburger" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
