import * as React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const SectionOne = () => {

    //     const { mobileImage, desktopImage } = useStaticQuery(graphql`
    //     query {
    //       desktopImage: file(relativePath: { eq: "estuary-tiles.svg" }) {
    //         childImageSharp {
    //           fluid(maxWidth: 1920) {
    //             ...GatsbyImageSharpFluid
    //           }
    //         }
    //       }
    //       mobileImage: file(relativePath: { eq: "estuary-tiles.svg" }) {
    //         childImageSharp {
    //           fluid(maxWidth: 650) {
    //             ...GatsbyImageSharpFluid
    //           }
    //         }
    //       }
    //     }
    //   `)

    //     const sources = [
    //         mobileImage.childImageSharp.fluid,
    //         {
    //             ...desktopImage.childImageSharp.fluid,
    //             media: `(min-width: 650px)`
    //         }
    //     ]

    return (
        <div className="section-one">
            <div className="section-one-wrapper">
                <div className="section-one-left">
                    <h1 className="section-one-h1">Real-time</h1>
                    <h1 className="section-one-h1">data-driven</h1>
                    <h1 className="section-one-h1">decisions</h1>
                    <div className="section-one-subtext-wrapper">
                        <p className="section-one-subtext">Managed streaming data pipelines, streaming SQL transformations and
                            turnkey connectivity to clouds, databases, and apps.
                        </p>
                        <p className="section-one-subtext">Use it free with hands-on support. Scale without bounds.
                        </p>
                    </div>
                    <Link className="section-one-try-it-button" to="#">
                        Try it free
                    </Link>
                </div>
                <div className="section-one-right">
                    <StaticImage
                        alt="estuary logo with other software tiles"
                        src="../images/estuary-tiles.svg"
                        layout="constrained"
                        className="section-one-right-image"
                    />
                </div>
            </div>
            <div className="section-one-bottom">
                <StaticImage
                    alt="flash pack logo"
                    src="../images/flashpack.svg"
                    imgStyle={{objectFit:"contain"}}
                    className="section-one-bottom-logo"
                    layout="constrained"
                />
                <StaticImage
                    alt="coalesce pack logo"
                    src="../images/coalesce.png"
                    imgStyle={{objectFit:"contain"}}
                    className="section-one-bottom-logo"
                    layout="constrained"
                />
                <StaticImage
                    alt="fenestra logo"
                    src="../images/fenestra.png"
                    imgStyle={{objectFit:"contain"}}
                    className="section-one-bottom-logo"
                    layout="constrained"
                />
                <StaticImage
                    alt="deep sync logo"
                    src="../images/deep_sync.png"
                    imgStyle={{objectFit:"contain"}}
                    className="section-one-bottom-logo"
                    layout="constrained"
                />
                <StaticImage
                    alt="pompato logo"
                    src="../images/pompato.png"
                    imgStyle={{objectFit:"contain"}}
                    className="section-one-bottom-logo"
                    layout="constrained"
                />
            </div>
        </div>
    )
}

export default SectionOne