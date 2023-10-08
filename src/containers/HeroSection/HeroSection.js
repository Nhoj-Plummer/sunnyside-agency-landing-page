import React from "react"
import {Navbar} from "../../components/componentsindex"
import {GlobalArrowDown} from "../../assets/assetsglobal"
import "./HeroSection.css"

const HeroSection = () => {
  return (
    <div className="hero-section_container">
      <div className="hero-section_image">
        <Navbar />
        <div className="hero-section_text">
          <h1>We Are Creatives</h1>
          <img alt="arrow" src={GlobalArrowDown} />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
