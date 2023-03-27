import * as React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import HeroAnimation from "../images/hero-animation.json"
import Lottie from 'lottie-react';

const SectionOne = () => {
    const logos = useStaticQuery(graphql`
        {
            allStrapiVanityLogo(
                sort: { SortOrder: DESC }
                filter: { Enabled: { eq: true } }
            ) {
                nodes {
                    enabled: Enabled
                    logo: Logo {
                        localFile {
                            svg {
                                content
                            }
                            name
                            internal {
                                mediaType
                            }
                            childImageSharp {
                                gatsbyImageData(layout: FIXED, width:120)
                            }
                        }
                    }
                }
            }
        }
    `)

    return (
        <div className="section-one">
            <div className="section-one-wrapper">
                <div className="section-one-left">
                    <h1 className="section-one-h1">Real-time</h1>
                    <h1 className="section-one-h1">data-driven</h1>
                    <h1 className="section-one-h1">decisions</h1>
                    <div className="section-one-subtext-wrapper">
                        <p className="section-one-subtext">
                            Managed streaming data pipelines, streaming SQL
                            transformations and turnkey connectivity to clouds,
                            databases, and apps.
                        </p>
                        <p className="section-one-subtext">
                            Use it free with hands-on support. Scale without
                            bounds.
                        </p>
                    </div>
                    <Link className="section-one-try-it-button" to="#">
                        Try it free
                    </Link>
                </div>
                <div className="section-one-right">
                    <Lottie animationData={HeroAnimation} className="section-one-right-image"/>
                </div>
            </div>
            <div className="section-one-bottom">
                {logos.allStrapiVanityLogo.nodes.map(logo =>
                    logo.logo.localFile.internal.mediaType === "image/svg+xml" ? (
                        <div
                            style={{ width: 120 }}
                            dangerouslySetInnerHTML={{
                                __html: logo.logo.localFile.svg.content,
                            }}
                        />
                    ) : (
                        <GatsbyImage
                            alt={`logo`}
                            className="section-one-bottom-logo"
                            image={
                                logo.logo.localFile.childImageSharp
                                    .gatsbyImageData
                            }
                        />
                    )
                )}
            </div>
        </div>
    )
}

export default SectionOne
