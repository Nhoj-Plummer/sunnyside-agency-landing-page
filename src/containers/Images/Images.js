import React from "react"
import "./Images.css"
import {MobileMilk, MobileOrange, MobileCone, MobileSugarCubes} from "../../assets/mobile/assetsmobile"
import {DesktopMilk, DesktopOrange, DesktopCone, DesktopSugarCubes} from "../../assets/desktop/assetsdesktop"

const Images = () => {
  return (
    <div className="images-container">
      <picture>
        <source media="(min-width: 541px)" srcSet={DesktopMilk} />
        <img src={MobileMilk} alt="img" />
      </picture>
      <picture>
        <source media="(min-width: 541px)" srcSet={DesktopMilk} />
        <img src={MobileMilk} alt="img" />
      </picture>
      <picture>
        <source media="(min-width: 541px)" srcSet={DesktopMilk} />
        <img src={MobileMilk} alt="img" />
      </picture>
      <picture>
        <source media="(min-width: 541px)" srcSet={DesktopMilk} />
        <img src={MobileMilk} alt="img" />
      </picture>
    </div>
  )
}

export default Images
