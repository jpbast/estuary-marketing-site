import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { normalizeConnector } from "../utils"
import FlowLogo from "../svgs/flow-logo.svg"
import { ConnectorsLink } from "../components/ConnectorsLink"
import { GatsbyImage } from "gatsby-plugin-image"
import ColoredLogo from "../svgs/colored-logo.svg"
import DbIcon from "../svgs/db2.svg"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import SectionTwoDataCaptureImg1 from "../svgs/product-flow-section-two-data-capture-image1.svg"
import FlowLongtailSaas from "../svgs/product-flow-longtail-saas.svg"
import { StaticImage } from "gatsby-plugin-image"


export interface ConnectorProps {
    data: {
        postgres: {
            connector: any
        }
    }
    pageContext: {
        id: string
        type: "capture" | "materialization"
    }
}

const Connector = ({
    data: {
        postgres: { connector },
    },
    pageContext,
}: ConnectorProps) => {
    const mapped = normalizeConnector(connector)

    return (
        <Layout headerTheme="light">
            <div className="blogs-index-wrapper">
                <div className="blogs-index-header-wrapper">
                    <div className="connector-index-header">
                        <div
                            style={{
                                flex: "1 1 2rem",
                                alignItems: "center",
                                minWidth: "20rem",
                            }}
                        >
                            <h1 className="connector-source-dest-title">Move your data</h1>
                            <h1 className="connector-source-dest-title">from <span>{mapped.title}</span></h1>
                            <h1 className="connector-source-dest-title">with millisecond</h1>
                            <h1 className="connector-source-dest-title">latency</h1>
                            <div className="connector-title-subtext">
                                <span>
                                    Estuary builds free, open-source connectors to{" "}
                                    {pageContext.type === "capture"
                                        ? "extract data from"
                                        : "write data to"}{" "}
                                    extract data from {mapped.title} in real-time,
                                    allowing you to enable a copy of your data wherever
                                    you want.
                                </span>

                            </div>
                            <div className="connector-try-it-free-button-wrapper">
                                <OutboundLink target="_blank" href="https://dashboard.estuary.dev/register" className="section-four-try-it-button">
                                    Try it free
                                </OutboundLink>
                            </div>
                        </div>
                        <div className="connector-source-dest-image-wrapper">
                            <div className="connector-source-dest-image-position-1">
                                <GatsbyImage
                                    image={
                                        mapped.logo?.childImageSharp?.gatsbyImageData
                                    }
                                    className="connector-source-dest-image"
                                    alt="Connector Logo"
                                />
                            </div>
                            <div className="connector-source-dest-image-position-2"><ColoredLogo style={{ maxWidth: "80px" }} className="connector-source-dest-image"
                            /></div>
                            <div className="connector-source-dest-image-position-3"><DbIcon className="connector-source-dest-image" /></div>
                        </div>
                    </div>
                    <div className="connector-section-wrapper">
                        <div className="connector-features-desc-subwrapper">
                            <h3 className="connector-features-header">Features</h3>
                            <div className="product-flow-topic-section-wrapper">
                                <div className="product-flow-topic-wrapper">
                                    <div className="icon-wrapper">
                                        <SectionTwoDataCaptureImg1 className="icon-image" />
                                    </div>
                                    <p className="product-flow-section-two-topic-child">
                                        <span className="product-flow-bold">
                                            Real-time CDC{" "}
                                        </span>
                                        from databases. Built by the Estuary
                                        team to scale and ensure exactly
                                        once semantics.
                                    </p>
                                </div>
                                <div className="product-flow-topic-wrapper">
                                    <div className="icon-wrapper">
                                        <StaticImage
                                            placeholder="none"
                                            alt="salesforce logo"
                                            src="../images/salesforce-logo.png"
                                            width={35}
                                            layout="fixed"
                                            className="icon-image"
                                        />
                                    </div>
                                    <p className="product-flow-section-two-topic-child">
                                        <span className="product-flow-bold">
                                            Real-time SaaS integrations
                                        </span>{" "}
                                        built by the Estuary team for apps
                                        that support streaming.
                                    </p>
                                </div>
                                <div className="product-flow-topic-wrapper">
                                    <div className="icon-wrapper">
                                        <FlowLongtailSaas className="icon-image" />
                                    </div>
                                    <p className="product-flow-section-two-topic-child">
                                        <span className="product-flow-bold">
                                            Long-tail SaaS
                                        </span>
                                        . Integrate any Airbyte connector to
                                        access 200+ batch-based endpoints.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="connector-features-desc-subwrapper connector-desc">
                            <h4>{mapped.title}</h4>
                            <p>{mapped.shortDescription}</p>
                        </div>
                    </div>
                    <div className="connector-section-wrapper connector-section-background">
                        <div>
                            <h2>Real-time data</h2>
                            <h2>without coding</h2>
                            <p>Estuary’s code-free streaming data operations platform enables real-time data with history and the integrations you need.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Connector

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({
    data: {
        postgres: { connector },
    },
}) => {
    return (
        <Seo
            title={connector.title?.["en-US"]}
            description={connector.shortDescription?.["en-US"]}
        />
    )
}

export const pageQuery = graphql`
    query ConnectorData($id: PostGraphile_Flowid!) {
        postgres {
            connector: connectorById(id: $id) {
                id
                externalUrl
                imageName
                shortDescription
                longDescription
                title
                logoUrl
                logo {
                    childImageSharp {
                        gatsbyImageData(
                            layout: CONSTRAINED
                            placeholder: NONE
                            quality: 100
                        )
                    }
                }
                recommended
                connectorTagsByConnectorIdList {
                    protocol
                }
            }
        }
    }
`
