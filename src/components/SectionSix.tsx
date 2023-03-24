import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const SectionSix = () => {
    return (
        <div className="section-six">
            <p className="section-four-header-small">Built for who</p>
            <div className="section-six-header-wrapper">
                <h2 className="section-six-header">
                    Built for &#123;engineers&#125;{" "}
                </h2>
                <div className="section-six-header-vectors">
                    <StaticImage
                        placeholder="none"
                        alt="estuary logo"
                        src="../images/estuary-vertical-logo.svg"
                        layout="constrained"
                        className="product-flow-section-one-image"
                    />
                </div>
            </div>
            <div className="section-six-subwrapper">
                <div className="section-six-left">
                    <div className="section-six-text-wrapper">
                        <p className="section-six-text">
                            Est amet tellus aliquet malesuada senectus tellus
                            amet massa phasellus dis viverra nibh mauris amet
                            purus purus mass lobortis tempor malesuada dui
                            tellus in sit elit ut bibendum a tellus.
                        </p>
                        <Link className="section-four-try-it-button" to="#">
                            Try it free
                        </Link>
                    </div>
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
