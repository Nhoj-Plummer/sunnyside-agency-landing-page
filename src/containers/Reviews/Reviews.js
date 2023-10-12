import React from "react"
import {Client} from "../../components/componentsindex"
import "./Reviews.css"

function Reviews() {
  return (
    <div className="reviews-container">
      <h1>Client Testimonials</h1>
      <Client />
      <Client />
      <Client />
    </div>
  )
}

export default Reviews
