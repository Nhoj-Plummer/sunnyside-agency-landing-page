import React, {useState} from "react"
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
      <a href="#project">Project</a>
    </p>
    <p>
      <span>
        <a href="#contact">CONTACT</a>
      </span>
    </p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(true)

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
        <div className="navbar-mobile-toggle">{toggleMenu ? <img src={GlobalHamburger} alt="off" onClick={() => setToggleMenu(false)} /> : <img src={GlobalHamburger} alt="on" onClick={() => setToggleMenu(true)} />}</div>
        {!toggleMenu && (
          <div className="navbar-mobile-menu">
            <Menu />
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
