import * as React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const SectionSix = () => {
    return (
        <div className="section-six">
            <p className="section-four-header-small">BUILT FOR WHO</p>
            <div className="section-six-header-wrapper">
                <h2 className="section-six-header">Built for &#123;engineers&#125;	</h2>
                <div className="section-six-header-vectors">
                    <StaticImage
                        alt="estuary logo top"
                        src="../images/estuary-top-logo-vector-2.svg"
                        className="section-six-header-vector"
                        layout="constrained"
                    />
                    <StaticImage
                        alt="estuary logo bottom"
                        src="../images/estuary-top-logo-vector-1.svg"
                        className="section-six-header-vector"
                        layout="constrained"
                    />
                </div>
            </div>
            <div className="section-six-subwrapper">
                <div className="section-six-left">
                    <div className="section-six-text-wrapper">
                        <p className="section-six-text">Est amet tellus aliquet malesuada senectus tellus amet massa phasellus dis viverra nibh mauris amet purus purus mass lobortis tempor malesuada dui tellus in sit elit ut bibendum a tellus.</p>
                        <Link className="section-four-try-it-button" to="#">
                            Try it free
                        </Link>
                    </div>
                </div>
                <div className="section-six-right">
                    <StaticImage
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