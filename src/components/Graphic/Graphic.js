import React from "react"
import "./Graphic.css"
import {DesktopEgg} from "../../assets/desktop/assetsdesktop.js"
import {MobileEgg} from "../../assets/mobile/assetsmobile"

const Graphic = () => {
  return (
    <div className="graphic-container">
      <div className="graphic-container_image">
        <picture>
          <source media="(min-width: 541px)" srcSet={DesktopEgg} />
          <img src={MobileEgg} alt="img" />
        </picture>
      </div>
      <div className="graphic-container_text">
        <h1>Transform your brand</h1>
        <p>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
        <span>
          <a href="#learnmore">Learn More</a>
        </span>
      </div>
    </div>
  )
}

export default Graphic
