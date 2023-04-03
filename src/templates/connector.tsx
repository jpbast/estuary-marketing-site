import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { normalizeConnector } from "../utils"
import FlowLogo from "../svgs/flow-logo.svg"
import { ConnectorsLink } from "../components/ConnectorsLink"

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
                        <div style={{ flex: "1 1 2rem", alignItems: "center" }}>
                            <h2>{mapped.title}</h2>
                            <p>
                                {mapped.longDescription ??
                                    mapped.shortDescription}
                            </p>
                        </div>
                        <div
                            style={{ flex: "1" }}
                            className="blog-post-header-vectors"
                        >
                            <img
                                src={mapped.logoUrl}
                                alt={`Connector Logo`}
                                // className="blog-post-header-vector"
                                style={{
                                    zIndex: 1,
                                    maxWidth: 250,
                                }}
                            />
                        </div>
                    </div>
                    <div className="connector-index-bottom">
                        <h4>
                            Estuary helps move data{" "}
                            {pageContext.type === "capture" ? "from" : "to"}{" "}
                            {mapped.title} in minutes with millisecond latency.
                        </h4>
                        <span>
                            Estuary builds free, open-source connectors to{" "}
                            {pageContext.type === "capture"
                                ? "extract data from"
                                : "write data to"}{" "}
                            extract data from {mapped.title} in real-time,
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
                            <ConnectorsLink/>
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
                recommended
                connectorTagsByConnectorIdList {
                    protocol
                }
            }
        }
    }
`
