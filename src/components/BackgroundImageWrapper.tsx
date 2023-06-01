import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import BackgroundImage from "gatsby-background-image"

const BackgroundImageWrapper = (
    props: React.BaseHTMLAttributes<HTMLDivElement>
) => {
    const data = useStaticQuery(
        graphql`
            query {
                background: file(relativePath: { eq: "blogs-bg.png" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 1920, ) {
                            ...GatsbyImageSharpFluid_withWebp_noBase64
                        }
                    }
                }
            }
        `
    )

    // Set ImageData.
    const imageData = data.background.childImageSharp.fluid

    return (
        // @ts-ignore
        <BackgroundImage
            Tag="div"
            fadeIn={false}
            critical
            className={"background-index-wrapper"}
            fluid={imageData}
            
            
            {...{ ...props, children: undefined }}
        >
            {props.children}
        </BackgroundImage>
    )
}

export default BackgroundImageWrapper
