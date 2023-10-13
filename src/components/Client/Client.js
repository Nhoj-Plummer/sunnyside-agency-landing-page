import React from "react"
import "./Client.css"
import {GlobalEmily} from "../../assets/assetsglobal"

const Client = () => {
  return (
    <div className="client-container">
      <div className="client-container_image">
        <img src={GlobalEmily} alt="img" />
      </div>
      <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and dealines were always hit</p>
      <h2>Emily R.</h2>
      <span>
        <p>Marketing Director</p>
      </span>
    </div>
  )
}

export default Client
