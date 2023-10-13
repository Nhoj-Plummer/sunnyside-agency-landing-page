import React from "react"
import "./Footer.css"
import {GlobalInstagram, GlobalFacebook, GlobalPinterest, GlobalTwitter} from "../../assets/assetsglobal"

const Footer = () => {
  return (
    <div className="footer-container">
      <h1>Sunnyside</h1>
      <div className="footer-container_links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
      </div>
      <div className="footer-container_image-links">
        <img src={GlobalFacebook} alt="facebook" />
        <img src={GlobalTwitter} alt="twitter" />
        <img src={GlobalInstagram} alt="instagram" />
        <img src={GlobalPinterest} alt="pinterest" />
      </div>
    </div>
  )
}

export default Footer
