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
import SliderHorizontal from "../components/SliderHorizontal"
import FlowExactlyOnce from "../svgs/product-flow-exactly-once.svg"
import CareerAvatar from "../svgs/about-careers-avatar-icon.svg"
import DataModernization from "../svgs/icon-data-modernization.svg"
import StreamingELT from "../svgs/icon-streaming-elt.svg"
import DataReplication from "../svgs/icon-data-replication.svg"
import OperationalAnalytics from "../svgs/icon-operational-analytics.svg"
import BackgroundImageWrapper from "../components/BackgroundImageWrapper"

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
            <BackgroundImageWrapper>
                <div className="blogs-index-header-wrapper">
                    <div className="connector-index-header">
                        <div
                            style={{
                                flex: "1 1 2rem",
                                alignItems: "center",
                                minWidth: "20rem",
                            }}
                        >
                            <h1 className="connector-source-dest-title">
                                Move your data
                            </h1>
                            <h1 className="connector-source-dest-title">
                                from <span>{mapped.title}</span>
                            </h1>
                            <h1 className="connector-source-dest-title">
                                with millisecond
                            </h1>
                            <h1 className="connector-source-dest-title">
                                latency
                            </h1>
                            <div className="connector-title-subtext">
                                <span>
                                    Estuary builds free, open-source connectors
                                    to{" "}
                                    {pageContext.type === "capture"
                                        ? "extract data from"
                                        : "write data to"}{" "}
                                    extract data from {mapped.title} in
                                    real-time, allowing you to enable a copy of
                                    your data wherever you want.
                                </span>
                            </div>
                            <div className="connector-try-it-free-button-wrapper">
                                <OutboundLink
                                    target="_blank"
                                    href="https://dashboard.estuary.dev/register"
                                    className="section-four-try-it-button"
                                >
                                    Try it free
                                </OutboundLink>
                            </div>
                        </div>
                        <div className="connector-source-dest-image-wrapper">
                            <div className="connector-source-dest-image-position-1">
                                <GatsbyImage
                                    image={
                                        mapped.logo?.childImageSharp
                                            ?.gatsbyImageData
                                    }
                                    className="connector-source-dest-image"
                                    alt="Connector Logo"
                                />
                            </div>
                            <div className="connector-source-dest-image-position-2">
                                <ColoredLogo
                                    style={{ maxWidth: "80px" }}
                                    className="connector-source-dest-image"
                                />
                            </div>
                            <div className="connector-source-dest-image-position-3">
                                <DbIcon className="connector-source-dest-image" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="connector-section-wrapper vertical-mobile">
                    <div className="connector-features-desc-subwrapper">
                        <h3 className="connector-features-header">Features</h3>
                        <p className="connector-features-subtext show-mobile">
                            Capture your data from sources like databases and
                            SaaS applications.
                        </p>
                        <div className="product-flow-topic-section-wrapper">
                            <div className="product-flow-topic-wrapper">
                                <div className="icon-wrapper">
                                    <SectionTwoDataCaptureImg1 className="icon-image" />
                                </div>
                                <p className="product-flow-section-two-topic-child">
                                    <span className="product-flow-bold">
                                        Real-time CDC{" "}
                                    </span>
                                    from databases. Built by the Estuary team to
                                    scale and ensure exactly once semantics.
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
                                    built by the Estuary team for apps that
                                    support streaming.
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
                                    . Integrate any Airbyte connector to access
                                    200+ batch-based endpoints.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="connector-features-desc-subwrapper connector-desc">
                        <h4>{mapped.title}</h4>
                        <p>{mapped.shortDescription}</p>
                    </div>
                </div>
                <div className="connector-section-wrapper connector-section-background vertical-mobile">
                    <div className="connector-section-content connector-center connector-section-mobile">
                        <h2 className="connector-h2-tight-margin hide-mobile">
                            Real-time data
                        </h2>
                        <h2 className="connector-h2-tight-margin hide-mobile">
                            without coding
                        </h2>
                        <h2 className="connector-h2-tight-margin">
                            Real-time data without coding
                        </h2>
                        <p className="connector-h2-subtext">
                            Estuary’s code-free streaming data operations
                            platform enables real-time data with history and the
                            integrations you need.
                        </p>
                    </div>
                    <div className="connector-section-content connector-center">
                        <div className="connector-video-wrapper">
                            <StaticImage
                                alt="video-overlay-play-button"
                                src="../images/video-play.png"
                                width={128}
                                layout="fixed"
                                className=""
                            />
                        </div>
                    </div>
                </div>
                <div className="connector-section-wrapper-top-margin">
                    <p className="connector-header-small">
                        Load data directly into the destination of your choice
                    </p>
                    <div className="connector-image-wrapper">
                        <StaticImage
                            alt="redshift logo"
                            src="../images/logos_row1.png"
                            layout="fixed"
                            className="connector-logo-row"
                        />
                        <StaticImage
                            alt="data logo"
                            src="../images/logos_row2.png"
                            layout="fixed"
                            className="connector-logo-row"
                        />
                        <StaticImage
                            alt="redshift logo"
                            src="../images/logos_row1.png"
                            className="connector-logo-row-mobile"
                        />
                        <StaticImage
                            alt="data logo"
                            src="../images/logos_row2.png"
                            className="connector-logo-row-mobile"
                        />
                    </div>
                    <Link
                        className="connector-destinations-button"
                        to="/destinations"
                    >
                        More destinations
                    </Link>
                    <FlowLogo className="flow-logo-100" />
                </div>
                <div className="connector-section-wrapper-vertical">
                    <p className="small-uppercase-header">why estuary flow</p>
                    <SliderHorizontal />
                </div>
                <div className="connector-section-wrapper-vertical">
                    <div className="product-flow-section-three-tile-wrapper">
                        <div className="product-flow-section-three-tile">
                            <div className="icon-wrapper">
                                <SectionTwoDataCaptureImg1 className="icon-image" />
                            </div>
                            <h3 className="section-four-tile-title">
                                Change data capture
                            </h3>
                            <p className="section-four-tile-subtext">
                                Real-time CDC from databases. Built by the
                                Estuary team to scale and ensure exactly once
                                semantics.
                            </p>
                        </div>
                        <div className="product-flow-section-three-tile">
                            <div className="icon-wrapper">
                                <CareerAvatar className="icon-image" />
                            </div>
                            <h3 className="section-four-tile-title">
                                Customer 360
                            </h3>
                            <p className="section-four-tile-subtext">
                                Gain a unified view of your customers while your
                                team interacts with them. Real-time with
                                historical data.
                            </p>
                        </div>
                        <div className="product-flow-section-three-tile">
                            <div className="icon-wrapper">
                                <OperationalAnalytics className="icon-image" />
                            </div>
                            <h3 className="section-four-tile-title">
                                Operational analytics
                            </h3>
                            <p className="section-four-tile-subtext">
                                Gain a unified view of your customers while your
                                team interacts with them. Real-time with
                                historical data.
                            </p>
                        </div>
                    </div>
                    <div className="product-flow-section-three-tile-wrapper">
                        <div className="product-flow-section-three-tile">
                            <div className="icon-wrapper">
                                <DataReplication className="icon-image" />
                            </div>
                            <h3 className="section-four-tile-title">
                                Data replication & migration
                            </h3>
                            <p className="section-four-tile-subtext">
                                Centralize data with real-time replication.
                            </p>
                        </div>
                        <div className="product-flow-section-three-tile">
                            <div className="icon-wrapper">
                                <StreamingELT className="icon-image" />
                            </div>
                            <h3 className="section-four-tile-title">
                                Streaming ELT
                            </h3>
                            <p className="section-four-tile-subtext">
                                Centralize data with real-time replication.
                            </p>
                        </div>
                        <div className="product-flow-section-three-tile">
                            <div className="icon-wrapper">
                                <DataModernization className="icon-image" />
                            </div>
                            <h3 className="section-four-tile-title">
                                Data modernization
                            </h3>
                            <p className="section-four-tile-subtext">
                                Seamlessly connect legacy systems to a modern
                                hybrid cloud environment that’s fully
                                extensible.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="connector-section-wrapper-vertical background-gray margin-top-lg">
                    <h2 className="center-text h2-mobile">
                        Real-time use cases
                    </h2>
                    <p className="connector-header-subtext">
                        Bye bye batch hello streaming type of sentiment
                    </p>
                    <StaticImage
                        alt="data-flow-banner-image"
                        src="../images/real-time-use-cases.png"
                        className="connector-image-large-center"
                    />
                    <div className="automated-schema-wrapper">
                        <p className="connector-header-small hide-mobile">
                            Automated Schema Migration
                        </p>
                        <p className="automated-schema-text">table_accounts</p>
                        <StaticImage
                            alt="table-column-options-image"
                            src="../images/table_accounts.png"
                            className="table-accounts"
                        />
                        <StaticImage
                            alt="table-column-options-image"
                            src="../images/table_accounts_vertical.png"
                            className="table-accounts-vertical"
                        />
                    </div>
                </div>
                <div className="connector-section-wrapper-vertical margin-top-lg">
                    <h2 className="center-text connector-h2-tight-margin">
                        Total visibility into
                    </h2>
                    <h2 className="center-text connector-h2-tight-margin">
                        your data pipelines
                    </h2>
                    <StaticImage
                        alt="flow-screenshot"
                        src="../images/flow-screenshot.png"
                        layout="fixed"
                        style={{ margin: "40px auto" }}
                        className="data-pipelines-image"
                    />
                    <StaticImage
                        alt="flow-screenshot"
                        src="../images/flow-screenshot.png"
                        className="data-pipelines-image-mobile"
                    />
                </div>
                <div className="connector-section-wrapper-vertical margin-top-lg">
                    <p className="small-uppercase-header header-margin-sm margin-auto">
                        powerful data transformations
                    </p>
                    <h2 className="center-text connector-h2-tight-margin">
                        True streaming SQL and
                    </h2>
                    <h2 className="center-text connector-h2-tight-margin">
                        javascript transformation
                    </h2>
                    <h2 className="center-text connector-h2-tight-margin">
                        directly in your warehouse
                    </h2>
                    <p className="connector-header-subtext">
                        Materialize views to your database or warehouse for
                        greatly reduced query costs
                    </p>
                    <StaticImage
                        alt="flow-screenshot"
                        src="../images/powerful-data-image.png"
                        layout="constrained"
                        style={{ margin: "40px 0 100px 0" }}
                        className="powerful-data"
                    />
                    <StaticImage
                        alt="flow-screenshot"
                        src="../images/powerful-data-vertical.png"
                        layout="fixed"
                        style={{ margin: "40px auto" }}
                        className="powerful-data-vertical"
                    />
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
