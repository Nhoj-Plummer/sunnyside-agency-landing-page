import React, {useState, useEffect} from "react"
import "./Body.css"
import {Graphic} from "../../components/componentsindex"
import {DesktopEgg, DesktopStandOut} from "../../assets/desktop/assetsdesktop.js"
import {MobileEgg, MobileStandOut} from "../../assets/mobile/assetsmobile"

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

const Body = () => {
  const { width} = useWindowDimensions()

  console.log(width)

  const graphicStyle1 = {background: "var(--color-y)", order: width > 540 ? "2" : ""}
  const graphicStyle2 = {background: "var(--color-sr)"}

  return (
    <div className="body-container">
      <Graphic desktopimg={DesktopEgg} mobileimg={MobileEgg} title={"Transform your brand"} imageStyle={graphicStyle1} text={"We are a full-service creative agency specializing in helping brands grow fast. ENgage your clients throuhg compelling visuals that do most of the marketing for you."} />
      <Graphic desktopimg={DesktopStandOut} mobileimg={MobileStandOut} title={"Stand out to the right audience"} imageStyle={graphicStyle2} text={"Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your branc in digital places."} />
    </div>
  )
}

export default Body
