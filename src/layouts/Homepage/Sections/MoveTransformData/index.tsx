import "./styles.less"

import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import OutboundLink from "../../../../components/OutboundLink"

const SectionMoveTransformData = () => {
    return (
        <div className="section-move-transform-data">
            <div className="container">
                <p className="title">
                    Move and <span>transform your data</span> from wherever it is to wherever you want it <span>in milliseconds</span>, without scheduling.
                </p>
                <p className="description">
                    Capture from Clouds, Databases and SaaS apps, create real-time transformations and materialized views, for a consistent, exact copy of your data powering both analytics and operations.
                </p>
                <div className="image-container">
                    <StaticImage
                        placeholder="none"
                        alt="Connect&Go"
                        layout="constrained"
                        src="../../../../images/move-transform-data.png"
                    />
                </div>
            </div>
        </div>
    )
}

export default SectionMoveTransformData