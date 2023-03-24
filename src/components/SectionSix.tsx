import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Slider from "./Slider"

const SectionSix = () => {
    return (
        <div className="section-six">
            <div className="section-six-header-wrapper">
                <p className="section-four-header-small">Built for who</p>
                <Slider />
                <div className="section-six-header-vectors">
                    <StaticImage
                        placeholder="none"
                        alt="estuary logo"
                        src="../images/estuary-vertical-logo.svg"
                        layout="constrained"
                        className="product-flow-section-one-image"
                    />
                </div>
                <div className="section-six-right">
                    <StaticImage
                        placeholder="none"
                        alt="code screenshot"
                        src="../images/code-screenshot.svg"
                        className="section-six-code-screenshot"
                        layout="constrained"
                    />
                </div>
            </div>
            <div className="section-six-subwrapper">

            </div>
        </div>
    )
}

export default SectionSix
