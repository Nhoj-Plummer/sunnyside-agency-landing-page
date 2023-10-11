import React from "react"
import "./Graphic2.css"

const Graphic2 = ({desktopimg, mobileimg, imageStyle, title, text}) => {
  return (
    <div className="graphic2-container">
      <div className="graphic2-container_image" style={imageStyle}>
        <div className="graphic2-container_text">
          <h1>Photography</h1>
          <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
        </div>
      </div>
    </div>
  )
}

export default Graphic2
