import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Slider from "./Slider"

const SectionSix = () => {
    return (
        <div className="section-six">
            <div className="section-six-slider-wrapper">
                <p className="section-four-header-small">Built for who</p>
                <Slider />
                <Link className="section-four-try-it-button section-six-margin" to="#">
                    Try it free
                </Link>
            </div>
            <div className="section-six-right-wrapper">
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

        </div>
    )
}

export default SectionSix
