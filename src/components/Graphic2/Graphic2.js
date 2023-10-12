import React from "react"
import "./Graphic2.css"

const Graphic2 = ({imageStyle, title, text}) => {
  return (
    <div className="graphic2-container">
      <div className="graphic2-container_image" style={imageStyle}>
        <div className="graphic2-container_text">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default Graphic2
