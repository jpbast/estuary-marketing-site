import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// @ts-ignore
import dataFlowGIF from "../images/product-flow-animation.gif"


const ProductPage = () => {
    return (
        <Layout headerTheme="light">
            <div className="product-flow">
                <div className="product-flow-section-one-background-image-wrapper">
                    <div className="product-flow-section-one">
                        <div className="product-flow-section-one-left">
                            <h1 className="product-flow-section-one-h1">Streaming ELT made simple</h1>
                            <p className="product-flow-section-one-subtext">Use it free with hands-on support. Scale without bounds.</p>
                            <Link className="product-flow-section-one-try-it-button" to="#">
                                Try it free
                            </Link>
                        </div>
                        <div className="product-flow-section-one-right">
                            <StaticImage
                                placeholder="none"
                                alt="estuary logo"
                                src="../images/estuary-vertical-logo.svg"
                                layout="fixed"
                                className="product-flow-section-one-image"
                            />
                        </div>
                    </div>
                </div>
                <div className="product-flow-section-two-background-image-wrapper">
                    <div className="product-flow-section-two">
                        <div className="product-flow-section-two-left">
                            <StaticImage
                                placeholder="none"
                                alt="estuary logo"
                                src="../images/estuary-vertical-logo.svg"
                                layout="constrained"
                                className="product-flow-section-one-image"
                            />
                            <div className="product-flow-section-two-gif-wrapper">
                                <img className="product-flow-section-two-gif" src={dataFlowGIF} alt="database data flow gif animation" />
                            </div>
                        </div>
                        <div className="product-flow-section-two-right">
                            <div>
                                <p className="product-flow-section-two-header-small">Data Movement</p>
                                <h2 className="product-flow-section-two-topic-header">Data capture</h2>
                                <p className="product-flow-section-two-topic-subtext">Capture your data from sources like databases and SaaS applications.</p>
                                <div className="product-flow-topic-section-wrapper">
                                    <div className="product-flow-topic-wrapper">
                                        <StaticImage
                                            placeholder="none"
                                            alt="data flow image"
                                            src="../images/product-flow-section-two-data-capture-image1.svg"
                                            layout="fixed"
                                            className="product-flow-section-two-topic-image"
                                        />
                                        <p className="product-flow-section-two-topic-child"><span className="product-flow-bold">Real-time CDC </span>from databases. Built by the Estuary team to scale
                                            and ensure exactly once semantics.</p>
                                    </div>
                                    <div className="product-flow-topic-wrapper">
                                        <StaticImage
                                            placeholder="none"
                                            alt="salesforce logo"
                                            src="../images/product-flow-section-two-data-capture-salesforce-logo.svg"
                                            layout="fixed"
                                            className="product-flow-section-two-topic-image"
                                        />
                                        <p className="product-flow-section-two-topic-child">
                                            <span className="product-flow-bold">Real-time SaaS integrations</span>  built by the Estuary team for apps that support streaming.
                                        </p>
                                    </div>
                                    <div className="product-flow-topic-wrapper">
                                        <StaticImage
                                            placeholder="none"
                                            alt="data cloud gear image"
                                            src="../images/product-flow-section-two-data-capture-image2.svg"
                                            layout="fixed"
                                            className="product-flow-section-two-topic-image"
                                        />
                                        <p className="product-flow-section-two-topic-child">
                                            <span className="product-flow-bold">Long-tail SaaS</span>. Integrate any Airbyte connector to access 200+ batch-based endpoints.
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div className="product-flow-section-two-transformations-wrapper">
                                <p className="product-flow-section-two-header-small">Transformations</p>
                                <h2 className="product-flow-section-two-topic-header">Powerful transformations</h2>
                                <div className="product-flow-topic-wrapper">
                                    <StaticImage
                                        placeholder="none"
                                        alt="circle to square flow image"
                                        src="../images/product-flow-section-two-topic-image3.svg"
                                        layout="fixed"
                                        className="product-flow-section-two-topic-image"
                                    />
                                    <p className="product-flow-section-two-topic-child">True streaming SQL and Javascript transformations.</p>
                                </div>
                            </div>
                            <div>
                                <h2 className="product-flow-section-two-topic-header">Materializations</h2>
                                <div className="product-flow-topic-wrapper">
                                    <StaticImage
                                        placeholder="none"
                                        alt="estuary logo"
                                        src="../images/product-flow-section-two-clock-icon.svg"
                                        layout="fixed"
                                        className="product-flow-section-two-topic-image"
                                    />
                                    <p className="product-flow-section-two-topic-child">
                                        Maintain low-latency views across systems of your choice. Built by the Estuary team, all materialization destinations are natively real-time.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-flow-section-three">
                    <p className="section-four-header-small">Extensibility</p>
                    <div className="product-flow-section-three-top-wrapper">
                        <div className="product-flow-section-three-header-wrapper">
                            <h2 className="product-flow-section-three-header">Easily add</h2>
                            <h2 className="product-flow-section-three-header">connectors through</h2>
                            <h2 className="product-flow-section-three-header">our open protocol</h2>
                        </div>
                        <div>
                            <StaticImage
                                placeholder="none"
                                alt="estuary logo"
                                src="../images/estuary-vertical-logo.svg"
                                layout="constrained"
                                className="product-flow-section-one-image"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="product-flow-section-three-tile-wrapper">
                            <div className="product-flow-section-three-tile">
                                <StaticImage
                                    placeholder="none"
                                    alt="data feature tile icon"
                                    src="../images/product-flow-connectors-1.svg"
                                    className="section-four-tile-icon"
                                    layout="fixed"
                                />
                                <h3 className="section-four-tile-title">
                                    Built-in testing
                                </h3>
                                <p className="section-four-tile-subtext">
                                    Unit tests ensure that you can be confident your data is accurate as you evolve <pipelines className="Pp"></pipelines>
                                </p>
                            </div>
                            <div className="product-flow-section-three-tile">
                                <StaticImage
                                    placeholder="none"
                                    alt="data feature tile icon"
                                    src="../images/product-flow-connectors-2.svg"
                                    className="section-four-tile-icon"
                                    layout="fixed"
                                />
                                <h3 className="section-four-tile-title">
                                    Survive any failure
                                </h3>
                                <p className="section-four-tile-subtext">
                                    Cross region and datacenter so that downtime in cloud providers won’t affect you.
                                </p>
                            </div>
                            <div className="product-flow-section-three-tile">
                                <StaticImage
                                    placeholder="none"
                                    alt="data feature tile icon"
                                    src="../images/product-flow-connectors-3.svg"
                                    className="section-four-tile-icon"
                                    layout="fixed"
                                />
                                <h3 className="section-four-tile-title">
                                    Exactly-once semantics
                                </h3>
                                <p className="section-four-tile-subtext">
                                    Ensure transactional consistency so you can have precise world views – and not just eventually consistent or at-least once semantics.
                                </p>
                            </div>
                            <div className="product-flow-section-three-tile">
                                <StaticImage
                                    placeholder="none"
                                    alt="data feature tile icon"
                                    src="../images/product-flow-connectors-4.svg"
                                    className="section-four-tile-icon"
                                    layout="fixed"
                                />
                                <h3 className="section-four-tile-title">Minimize load on your systems</h3>
                                <p className="section-four-tile-subtext">
                                    Pull data from your systems once using low-impact CDC, and Flow can help you use it across all your systems without having to re-sync.
                                </p>
                            </div>
                        </div>
                        <div className="product-flow-section-three-tile-wrapper">
                            <div className="product-flow-section-three-tile">
                                <StaticImage
                                    placeholder="none"
                                    alt="data feature tile icon"
                                    src="../images/product-flow-connectors-5.svg"
                                    className="section-four-tile-icon"
                                    layout="fixed"
                                />
                                <h3 className="section-four-tile-title">
                                    Scaling
                                </h3>
                                <p className="section-four-tile-subtext">
                                    Flow is a distributed system which scales with your data and has been operated at data volumes up to 7 GB/s. Backfill terabytes of data in minutes from your source systems without breaking a sweat.
                                </p>
                            </div>
                            <div className="product-flow-section-three-tile">
                                <StaticImage
                                    placeholder="none"
                                    alt="data feature tile icon"
                                    src="../images/product-flow-connectors-6.svg"
                                    className="section-four-tile-icon"
                                    layout="fixed"
                                />
                                <h3 className="section-four-tile-title">
                                    Live reporting and monitoring
                                </h3>
                                <p className="section-four-tile-subtext">
                                    Know your data is flowing with up-to-the-minute reporting.
                                </p>
                            </div>
                            <div className="product-flow-section-three-tile">
                                <StaticImage
                                    placeholder="none"
                                    alt="data feature tile icon"
                                    src="../images/product-flow-connectors-7.svg"
                                    className="section-four-tile-icon"
                                    layout="fixed"
                                />
                                <h3 className="section-four-tile-title">
                                    Schema inference
                                </h3>
                                <p className="section-four-tile-subtext">
                                    Turn your unstructured data into structured data
                                </p>
                            </div>
                        </div>
                        <div className="section-four-try-it-button-wrapper">
                            <p className="section-four-try-it-header-text">
                                Use it free with hands-on support.  Scale without
                                bounds.
                            </p>
                            <Link className="section-four-try-it-button" to="#">
                                Try it free
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ProductPage