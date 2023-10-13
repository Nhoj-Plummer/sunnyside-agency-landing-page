import React from "react"
import "./Client.css"


const Client = ({personImg, text, name, job}) => {
  return (
    <div className="client-container">
      <div className="client-container_image">
        <img src={personImg} alt="img" />
      </div>
      <div className="client-container_text">
        <p>{text}</p>
        <h2>{name}</h2>
        <h4>{job}</h4>
      </div>
    </div>
  )
}

export default Client
