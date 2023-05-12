import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { normalizeConnector } from "../utils"
import FlowLogo from "../svgs/flow-logo.svg"
import ColoredLogo from "../svgs/colored-logo.svg"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { ConnectorsLink } from "../components/ConnectorsLink"
import BackgroundImageWrapper from "../components/BackgroundImageWrapper"

export interface ConnectorProps {
    data: {
        source: {
            connector: any
        }
        destination: {
            connector: any
        }
    }
    pageContext: {
        source_id: string
        destination_id: string
    }
}

const Connector = ({
    data: {
        source: { connector: source_connector },
        destination: { connector: destination_connector },
    },
    pageContext,
}: ConnectorProps) => {
    const mapped_source = normalizeConnector(source_connector)
    const mapped_destination = normalizeConnector(destination_connector)

    return (
        <Layout headerTheme="light">
            <BackgroundImageWrapper>
                <div className="blogs-index-header-wrapper">
                    <div className="connection-index-header">
                        <h1>
                            {mapped_source.title} to {mapped_destination.title}{" "}
                            in minutes
                        </h1>
                        <div className="connection-descriptions">
                            <div className="connection-description">
                                <GatsbyImage
                                    image={
                                        mapped_source.logo?.childImageSharp
                                            ?.gatsbyImageData
                                    }
                                    style={{ zIndex: 1, maxWidth: 250 }}
                                    alt="Source Logo"
                                />
                                <h4>{mapped_source.title}</h4>
                                <p>
                                    {mapped_source.longDescription ??
                                        mapped_source.shortDescription}
                                </p>
                            </div>
                            <ColoredLogo />
                            <div className="connection-description">
                                <GatsbyImage
                                    image={
                                        mapped_destination.logo?.childImageSharp
                                            ?.gatsbyImageData
                                    }
                                    style={{ zIndex: 1, maxWidth: 250 }}
                                    alt="Destination Logo"
                                />
                                <h4>{mapped_destination.title}</h4>
                                <p>
                                    {mapped_destination.longDescription ??
                                        mapped_destination.shortDescription}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="connector-index-bottom">
                        <h4>
                            Estuary helps move data from {mapped_source.title}{" "}
                            to {mapped_destination.title} in minutes with
                            millisecond latency.
                        </h4>
                        <span>
                            Estuary builds free, open-source connectors to
                            extract data from {mapped_source.title} and write
                            data to {destination_connector.tile} in real-time,
                            allowing you to enable a copy of your data wherever
                            you want.
                        </span>

                        <FlowLogo style={{ marginTop: "1rem" }} />
                        <h2>All your data, where you need it</h2>
                        <span>
                            Consolidate your data into the leading warehouses,
                            then integrate with your tools of choice.
                        </span>
                        <div className="connector-link-bottom">
                            <ConnectorsLink
                                defaultSource={mapped_source.id}
                                defaultDestination={mapped_destination.id}
                            />
                        </div>
                    </div>
                </div>
            </BackgroundImageWrapper>
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
        source: { connector: source_connector },
        destination: { connector: destination_connector },
    },
}) => {
    return (
        <Seo
            title={`${source_connector.title?.["en-US"]} to ${destination_connector.title?.["en-US"]}`}
            description={`Estuary helps move data from ${source_connector.title?.["en-US"]} to ${destination_connector.title?.["en-US"]} in minutes with millisecond latency.`}
        />
    )
}

export const pageQuery = graphql`
    query ConnectorData(
        $source_id: PostGraphile_Flowid!
        $destination_id: PostGraphile_Flowid!
    ) {
        source: postgres {
            connector: connectorById(id: $source_id) {
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
                            quality: 95
                        )
                    }
                }
                recommended
                connectorTagsByConnectorIdList {
                    protocol
                }
            }
        }
        destination: postgres {
            connector: connectorById(id: $destination_id) {
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
                            quality: 95
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
