import React from "react"
import Marquee from "react-fast-marquee"

import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import { Container } from "./style"

const LogoSlider = () => {
    const logos = useStaticQuery(graphql`
        {
            allStrapiVanityLogo(
                sort: { SortOrder: DESC }
                filter: { Enabled: { eq: true } }
            ) {
                nodes {
                    id
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
                                gatsbyImageData(
                                    layout: FIXED
                                    width: 120
                                    placeholder: NONE
                                )
                            }
                        }
                    }
                }
            }
        }
    `
            )
    
    return (
        <Container>
            <Marquee>
                {logos.allStrapiVanityLogo.nodes?.map((logo) =>
                    logo.logo.localFile.internal.mediaType === "image/svg+xml" ? (
                        <div className="custom-slider" key={logo.id} >
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: logo.logo.localFile.svg.content,
                                }}
                            />
                        </div>
                    ) : (
                        <div className="custom-slider" key={logo.id}>
                            <GatsbyImage
                                alt={`logo`}
                                loading="eager"
                                image={
                                    logo.logo.localFile.childImageSharp.gatsbyImageData
                                }
                            />
                        </div>
                    )
                )}
            </Marquee>
        </Container>
    )
}

export default LogoSlider