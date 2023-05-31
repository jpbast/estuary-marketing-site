import React from "react"
import Img from "gatsby-image"

const ImgSharpInline = ({ className, fluidimg, alt }) => {
    const parsed = JSON.parse(fluidimg)
    return (
    <Img
        className={className}
        style={{maxWidth: parsed?.presentationWidth, margin:"0 auto"}}
        fluid={parsed}
        alt={alt}
        loading="eager"
    />
    )
    }

export default ImgSharpInline
