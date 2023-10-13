import React from "react"
import {Client} from "../../components/componentsindex"
import "./Reviews.css"
import {GlobalEmily, GlobalThomas, GlobalJennie} from "../../assets/assetsglobal"

function Reviews() {
  return (
    <div className="reviews-container">
      <h1>CLIENT TESTIMONIALS</h1>
      <Client personImg={GlobalEmily} text={"We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."} name={" Emily R."} job={"Marketing Director"} />
      <Client personImg={GlobalThomas} text={"Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience."} name={"Thomas S."} job={"Chief Operating Officer"} />
      <Client personImg={GlobalJennie} text={"Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"} name={"Jennie F."} job={"Business Owner"} />
    </div>
  )
}

export default Reviews
