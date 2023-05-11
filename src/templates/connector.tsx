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
                    <div className="connector-index-bottom">
                        <h4>
                            Estuary helps move data{" "}
                            {pageContext.type === "capture" ? "from" : "to"}{" "}
                            {mapped.title} in minutes with millisecond latency.
                        </h4>

                        <FlowLogo style={{ marginTop: "1rem" }} />
                        <h2>All your data, where you need it</h2>
                        <span>
                            Consolidate your data into the leading warehouses,
                            then integrate with your tools of choice.
                        </span>
                        <div className="connector-link-bottom">
                            <ConnectorsLink
                                defaultSource={
                                    pageContext.type === "capture"
                                        ? pageContext.id
                                        : null
                                }
                                defaultDestination={
                                    pageContext.type === "materialization"
                                        ? pageContext.id
                                        : null
                                }
                            />
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
