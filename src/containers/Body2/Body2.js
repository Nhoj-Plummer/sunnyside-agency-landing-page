import React, {useState, useEffect} from "react"
import "./Body2.css"
import {Graphic2} from "../../components/componentsindex"
import {DesktopBlueOrange} from "../../assets/desktop/assetsdesktop"
import {MobileBlueOrange} from "../../assets/mobile/assetsmobile"

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

  const graphicStyle1 = {backgroundImage: width > 540 ? `url(${DesktopBlueOrange})`: `url(${MobileBlueOrange})`}

  return (
    <div className="body2-container">
      <Graphic2 imageStyle={graphicStyle1} />
      <Graphic2 />
    </div>
  )
}

export default Body2
