import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { normalizeConnector } from "../utils"
import FlowLogo from "../svgs/flow-logo.svg"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

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
                        <div style={{flex: "1 1 50%"}}>
                            <h2>{mapped.title}</h2>
                            <p>
                                {mapped.longDescription ??
                                    mapped.shortDescription}
                            </p>
                        </div>
                        <div style={{flex: "1 1 50%"}} className="blog-post-header-vectors">
                            <GatsbyImage
                                image={
                                    mapped.logo?.childImageSharp
                                        ?.gatsbyImageData
                                }
                                alt={`Connector Logo`}
                                className="blog-post-header-vector"
                                style={{
                                    zIndex: 1,
                                    maxWidth: 250
                                }}
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
                        gatsbyImageData(layout: CONSTRAINED)
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
