import { graphql, Link } from "gatsby"
import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { normalizeConnector } from "../utils"
import FlowLogo from "../svgs/flow-logo.svg"
import { ConnectorsLink } from "../components/ConnectorsLink"
import { GatsbyImage } from "gatsby-plugin-image"
import ReactPlayer from "react-player/lazy"
import ColoredLogo from "../svgs/colored-logo.svg"
import DbIcon from "../svgs/db2.svg"
import { OutboundLink } from "../components/OutboundLink"
import SectionTwoDataCaptureImg1 from "../svgs/product-flow-section-two-data-capture-image1.svg"
import FlowLongtailSaas from "../svgs/product-flow-longtail-saas.svg"
import { StaticImage } from "gatsby-plugin-image"
import SliderHorizontal from "../components/SliderHorizontal"
import FlowExactlyOnce from "../svgs/product-flow-exactly-once.svg"
import CareerAvatar from "../svgs/about-careers-avatar-icon.svg"
import DataModernization from "../svgs/icon-data-modernization.svg"
import StreamingELT from "../svgs/icon-streaming-elt.svg"
import DataReplication from "../svgs/icon-data-replication.svg"
import OperationalAnalytics from "../svgs/icon-operational-analytics.svg"
import BackgroundImageWrapper from "../components/BackgroundImageWrapper"
import ConnectorsImageDesktop from "../components/ConnectorsImageDesktop"
import ConnectorsImageMobile from "../components/ConnectorsImageMobile"
import { isMobile } from "react-device-detect"
import { Connectors } from "../components/Connectors"
import { ConnectorPage } from "../components/ConnectorPage"

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
    //future work if someone wants to parametrize the source and destination images
    connectorImageSource: {
        source: any
    }
    connectorImageDestination: {
        destination: any
    }
}

const Connector = ({
    data: {
        postgres: { connector },
    },
}: ConnectorProps) => {
    const mapped = normalizeConnector(connector)

    return (
        <Layout headerTheme="light">
            <ConnectorPage
                source_connector={mapped.type === "capture" ? connector : null}
                dest_connector={
                    mapped.type === "materialization" ? connector : null
                }
                connector_type={mapped.type}
            />
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
    const title = connector.title?.["en-US"]
    return (
        <Seo
            title={title}
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
