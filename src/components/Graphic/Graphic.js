import React from "react"
import "./Graphic.css"


const Graphic = ({desktopimg, mobileimg, imageStyle, title, text}) => {
  return (
    <div className="graphic-container">
      <div className="graphic-container_image" style={imageStyle}>
        <picture>
          <source media="(min-width: 541px)" srcSet={desktopimg} />
          <img src={mobileimg} alt="img" />
        </picture>
      </div>
      <div className="graphic-container_text">
        <h1>{title}</h1>
        <p>{text}</p>
        <span>
          <a href="#learnmore">Learn More</a>
        </span>
      </div>
    </div>
  )
}

export default Graphic
