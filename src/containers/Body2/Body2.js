import React, {useState, useEffect} from "react"
import "./Body2.css"
import {Graphic2} from "../../components/componentsindex"
import {DesktopBlueOrange, DesktopCherry} from "../../assets/desktop/assetsdesktop"
import {MobileBlueOrange, MobileCherry} from "../../assets/mobile/assetsmobile"

function getWindowDimensions() {
  const {innerWidth: width, innerHeight: height} = window
  return {
    width,
    height
  }
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowDimensions
}

const Body2 = () => {
  const {width} = useWindowDimensions()

  const graphicStyle1 = {backgroundColor: "#9adaca", backgroundImage: width > 540 ? `url(${DesktopCherry})` : `url(${MobileCherry})`, color: "var(--color-ddc)"}
  const graphicStyle2 = {backgroundColor: "#4cc9ff", backgroundImage: width > 540 ? `url(${DesktopBlueOrange})` : `url(${MobileBlueOrange})`, color: "var(--color-db)"}

  return (
    <div className="body2-container">
      <Graphic2 imageStyle={graphicStyle1} title={"Graphic Design"} text={"Great design makes you memorable, we deliver artworkthat underscoresyour brand message and captures potential clients' attention."} />
      <Graphic2 imageStyle={graphicStyle2} title={"Photography"} text={"Increase your credibility by getting the most stunning, high-quality photos that improve your business image."} />
    </div>
  )
}

export default Body2
