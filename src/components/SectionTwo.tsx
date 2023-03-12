import * as React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const SectionTwo = () => {

    return (
        <div className="section-two">
            <div className="section-two-header-wrapper">
                <div className="section-two-header-subwrapper">
                    <h2 className="section-two-header">Move and <span className="section-two-header-colortext">transform your data</span> from wherever it is to wherever you want it
                        <span className="section-two-header-colortext"> in milliseconds</span>, without scheduling.
                    </h2>
                    <p>
                        Capture from Clouds, Databases and SaaS apps, create real-time transformations and materialized views, for a consistent, exact copy of your data powering both analytics and operations.
                    </p>
                </div>
                <div className="section-two-header-vectors">
                    <StaticImage
                        alt="estuary logo top"
                        src="../images/estuary-top-logo-vector-2.svg"
                        className="section-two-header-vector"
                        layout="constrained"
                        style={{
                            zIndex: 1
                        }}
                    />
                    <StaticImage
                        alt="estuary logo bottom"
                        src="../images/estuary-top-logo-vector-1.svg"
                        className="section-two-header-vector"
                        layout="constrained"
                    />
                </div>
            </div>
            <div className="section-two-first-graphic-wrapper">
                <StaticImage
                    alt="estuary data integration graphic"
                    src="../images/section-two-first-graphic.svg"
                    className="section-two-first-graphic"
                    layout="constrained"
                />
            </div>
        </div>
    )

}




export default SectionTwo