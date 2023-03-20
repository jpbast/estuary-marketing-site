import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


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
                <div className="product-flow-section-two">
                    <div className="product-flow-section-two-left">
                        <StaticImage
                            placeholder="none"
                            alt="estuary logo"
                            src="../images/estuary-vertical-logo.svg"
                            layout="fixed"
                            className="product-flow-section-one-image"
                        />
                        <div>left image</div>
                    </div>
                    <div className="product-flow-section-two-right">
                        <div>
                            <p className="product-flow-section-two-header-small">Data Movement</p>
                            <h2 className="product-flow-section-two-topic-header">Data capture</h2>
                            <p className="product-flow-section-two-topic-subtext">Capture your data from sources like databases and SaaS applications.</p>
                            <div>
                                <div>
                                    <StaticImage
                                        placeholder="none"
                                        alt="data flow image"
                                        src="../images/product-flow-section-two-data-capture-image1.svg"
                                        layout="fixed"
                                        className="product-flow-section-one-image"
                                    />
                                    <p className="product-flow-section-two-topic-child">Real-time CDC from databases. Built by the Estuary team to scale 
                                        and ensure exactly once semantics.</p>
                                </div>
                                <div>
                                    <StaticImage
                                        placeholder="none"
                                        alt="salesforce logo"
                                        src="../images/product-flow-section-two-data-capture-salesforce-logo.svg"
                                        layout="fixed"
                                        className="product-flow-section-one-image"
                                    />
                                    <p className="product-flow-section-two-topic-child">
                                        Real-time SaaS integrations built by the Estuary team for apps that support streaming.
                                    </p>
                                </div>
                                <div>
                                    <StaticImage
                                        placeholder="none"
                                        alt="estuary logo"
                                        src="../images/product-flow-section-two-data-capture-image2.svg"
                                        layout="fixed"
                                        className="product-flow-section-one-image"
                                    />
                                    <p className="product-flow-section-two-topic-child">
                                        Long-tail SaaS. Integrate any Airbyte connector to access 200+ batch-based endpoints.
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div>
                            <p className="product-flow-section-two-header-small">Tranformations</p>
                            <h2 className="product-flow-section-two-topic-header">Powerful transformations</h2>
                            <p className="product-flow-section-two-topic-subtext">True streaming SQL and Javascript transformations.</p>
                            <div>
                                    <StaticImage
                                        placeholder="none"
                                        alt="estuary logo"
                                        src="../images/estuary-vertical-logo.svg"
                                        layout="fixed"
                                        className="product-flow-section-one-image"
                                    />
                                    <p>
                                        Long-tail SaaS. Integrate any Airbyte connector to access 200+ batch-based endpoints.
                                    </p>
                                </div>
                        </div>
                        <div>
                            <h2 className="product-flow-section-two-topic-header">Materializations</h2>
                            <div>
                                    <StaticImage
                                        placeholder="none"
                                        alt="estuary logo"
                                        src="../images/estuary-vertical-logo.svg"
                                        layout="fixed"
                                        className="product-flow-section-one-image"
                                    />
                                    <p>
                                    Maintain low-latency views across systems of your choice. Built by the Estuary team, all materialization destinations are natively real-time.
                                    </p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ProductPage