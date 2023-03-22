import * as React from "react"
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"


const PricingPage = () => {
    return (
        <Layout headerTheme="light">
            <div className="pricing-page">
                <div className="pricing-page-background-image-wrapper">
                    <div className="pricing-page-top">
                        <div className="pricing-page-top-left">
                            <h1 className="product-flow-section-one-h1">Pricing Tiers</h1>
                            <p className="pricing-page-subheader-text">Predictable pricing that scales with your business.</p>
                        </div>
                        <div className="pricing-page-top-right">
                            <StaticImage
                                placeholder="none"
                                alt="estuary logo"
                                src="../images/estuary-vertical-logo.svg"
                                layout="fixed"
                                className="product-flow-section-one-image"
                            />
                        </div>
                    </div>

                    <div className="pricing-page-tiles-wrapper">
                        <div className="pricing-page-tile">
                            <StaticImage
                                placeholder="none"
                                alt="data flow image"
                                src="../images/pricing-open-source.svg"
                                layout="fixed"
                                className="pricing-page-tile-icon"
                            />
                            <p className="pricing-page-tile-name">Open source</p>
                            <p className="pricing-page-price"><span className="pricing-page-price-bold">$0</span>/month</p>
                            <p className="pricing-page-tile-price-subtext">Free with BSL</p>
                            <div className="pricing-page-checklist-wrapper">
                                <div className="pricing-page-checklist-item">
                                    <StaticImage
                                        placeholder="none"
                                        alt="data flow image"
                                        src="../images/blue-checkmark.svg"
                                        layout="fixed"
                                        className="pricing-page-tile-checkmark-image"
                                    />
                                    <p className="pricing-page-tile-checklist-item-text"><span className="pricing-page-checklist-item-text-bold">20GB</span> data</p>
                                </div>
                                <div className="pricing-page-checklist-item">
                                    <StaticImage
                                        placeholder="none"
                                        alt="data flow image"
                                        src="../images/blue-checkmark.svg"
                                        layout="fixed"
                                        className="pricing-page-tile-checkmark-image"
                                    />
                                    <p className="pricing-page-tile-checklist-item-text">Millisecond latency</p>
                                </div>
                                <div className="pricing-page-checklist-item">
                                    <StaticImage
                                        placeholder="none"
                                        alt="data flow image"
                                        src="../images/blue-checkmark.svg"
                                        layout="fixed"
                                        className="pricing-page-tile-checkmark-image"
                                    />
                                    <p className="pricing-page-tile-checklist-item-text">CDC from DBs & 50+ APIs</p>
                                </div>
                                <div className="pricing-page-checklist-item">
                                    <StaticImage
                                        placeholder="none"
                                        alt="data flow image"
                                        src="../images/blue-checkmark.svg"
                                        layout="fixed"
                                        className="pricing-page-tile-checkmark-image"
                                    />
                                    <p className="pricing-page-tile-checklist-item-text">Real-time transformations</p>
                                </div>

                                <div className="pricing-page-checklist-item">
                                    <StaticImage
                                        placeholder="none"
                                        alt="data flow image"
                                        src="../images/blue-checkmark.svg"
                                        layout="fixed"
                                        className="pricing-page-tile-checkmark-image"
                                    />
                                    <p className="pricing-page-tile-checklist-item-text">Real-time materializations</p>
                                </div>

                                <div className="pricing-page-checklist-item">
                                    <StaticImage
                                        placeholder="none"
                                        alt="data flow image"
                                        src="../images/blue-checkmark.svg"
                                        layout="fixed"
                                        className="pricing-page-tile-checkmark-image"
                                    />
                                    <p className="pricing-page-tile-checklist-item-text">Limitless horizontal scaling</p>
                                </div>

                                <div className="pricing-page-checklist-item">
                                    <StaticImage
                                        placeholder="none"
                                        alt="data flow image"
                                        src="../images/blue-checkmark.svg"
                                        layout="fixed"
                                        className="pricing-page-tile-checkmark-image"
                                    />
                                    <p className="pricing-page-tile-checklist-item-text">Free support on Slack</p>
                                </div>
                            </div>
                            <Link className="pricing-page-tile-button" to="">Get started</Link>
                        </div>
                        <div className="pricing-page-tile">
                            <StaticImage
                                placeholder="none"
                                alt="data flow image"
                                src="../images/pricing-cloud.svg"
                                layout="fixed"
                                className="pricing-page-tile-icon"
                            />
                            <p className="pricing-page-tile-name">cloud</p>
                            <p className="pricing-page-price"><span className="pricing-page-price-bold">$XX</span>/month</p>
                            <StaticImage
                                placeholder="none"
                                alt="data pricing slider image"
                                src="../images/pricing-slider.svg"
                                layout="fixed"
                                className="pricing-page-pricing-slider"
                            />

                            <div className="pricing-page-checklist-wrapper">
                                <div className="pricing-page-checklist-item">
                                    <StaticImage
                                        placeholder="none"
                                        alt="data flow image"
                                        src="../images/blue-checkmark.svg"
                                        layout="fixed"
                                        className="pricing-page-tile-checkmark-image"
                                    />
                                    <p className="pricing-page-tile-checklist-item-text"><span className="pricing-page-checklist-item-text-bold">500GB</span> data</p>
                                </div>
                                <div className="pricing-page-checklist-item">
                                    <StaticImage
                                        placeholder="none"
                                        alt="data flow image"
                                        src="../images/blue-checkmark.svg"
                                        layout="fixed"
                                        className="pricing-page-tile-checkmark-image"
                                    />
                                    <p className="pricing-page-tile-checklist-item-text">All in Open Source</p>
                                </div>
                                <div className="pricing-page-checklist-item">
                                    <StaticImage
                                        placeholder="none"
                                        alt="data flow image"
                                        src="../images/blue-checkmark.svg"
                                        layout="fixed"
                                        className="pricing-page-tile-checkmark-image"
                                    />
                                    <p className="pricing-page-tile-checklist-item-text">Cloud-hosted Flow</p>
                                </div>
                                <div className="pricing-page-checklist-item">
                                    <StaticImage
                                        placeholder="none"
                                        alt="data flow image"
                                        src="../images/blue-checkmark.svg"
                                        layout="fixed"
                                        className="pricing-page-tile-checkmark-image"
                                    />
                                    <p className="pricing-page-tile-checklist-item-text">99% uptime SLA</p>
                                </div>

                                <div className="pricing-page-checklist-item">
                                    <StaticImage
                                        placeholder="none"
                                        alt="data flow image"
                                        src="../images/blue-checkmark.svg"
                                        layout="fixed"
                                        className="pricing-page-tile-checkmark-image"
                                    />
                                    <p className="pricing-page-tile-checklist-item-text">Free 30-day trial</p>
                                </div>

                                <div className="pricing-page-checklist-item">
                                    <StaticImage
                                        placeholder="none"
                                        alt="data flow image"
                                        src="../images/blue-checkmark.svg"
                                        layout="fixed"
                                        className="pricing-page-tile-checkmark-image"
                                    />
                                    <p className="pricing-page-tile-checklist-item-text">UI access for deployment, altering and monitoring</p>
                                </div>
                            </div>
                            <Link className="pricing-page-tile-button" to="">Try it free</Link>
                        </div>
                        <div className="pricing-page-tile">
                            <StaticImage
                                placeholder="none"
                                alt="data flow image"
                                src="../images/pricing-enterprise.svg"
                                layout="fixed"
                                className="pricing-page-tile-icon"
                            />
                            <p className="pricing-page-tile-name">enterprise</p>
                            <p className="pricing-page-price"><span className="pricing-page-price-bold">Custom</span></p>
                            <div className="pricing-page-checklist-wrapper-custom">
                                <div className="pricing-page-checklist-item">
                                    <StaticImage
                                        placeholder="none"
                                        alt="data flow image"
                                        src="../images/blue-checkmark.svg"
                                        layout="fixed"
                                        className="pricing-page-tile-checkmark-image"
                                    />
                                    <p className="pricing-page-tile-checklist-item-text">All in Open Source and Cloud</p>
                                </div>
                                <div className="pricing-page-checklist-item">
                                    <StaticImage
                                        placeholder="none"
                                        alt="data flow image"
                                        src="../images/blue-checkmark.svg"
                                        layout="fixed"
                                        className="pricing-page-tile-checkmark-image"
                                    />
                                    <p className="pricing-page-tile-checklist-item-text">24/7 hands-on support</p>
                                </div>
                                <div className="pricing-page-checklist-item">
                                    <StaticImage
                                        placeholder="none"
                                        alt="data flow image"
                                        src="../images/blue-checkmark.svg"
                                        layout="fixed"
                                        className="pricing-page-tile-checkmark-image"
                                    />
                                    <p className="pricing-page-tile-checklist-item-text">Provisioned servers</p>
                                </div>
                                <div className="pricing-page-checklist-item">
                                    <StaticImage
                                        placeholder="none"
                                        alt="data flow image"
                                        src="../images/coming-soon-icon.svg"
                                        layout="fixed"
                                        className="pricing-page-tile-coming-soon-image"
                                    />
                                    <p className="pricing-page-tile-checklist-item-text">VPC-based deployments</p>
                                </div>
                            </div>
                            <Link className="pricing-page-tile-button" to="">Contact us</Link>
                        </div>
                    </div>
                    <div className="pricing-page-quote-box">
                        <StaticImage
                            placeholder="none"
                            alt="data flow image"
                            src="../images/graphic-quote.svg"
                            className="pricing-page-tile-graphic-quote-image"
                            layout="constrained"
                        />
                        <p className="pricing-page-quote-box-quote">
                            “This tool is 1000x times better than LogStash or Elastic Enterprise Data Ingestion Tool, which has many issues.”
                        </p>
                        <div className="pricing-page-quote-image-wrapper">
                            <StaticImage
                                placeholder="none"
                                alt="data flow image"
                                src="../images/pompato-color.svg"
                                layout="fixed"
                                className="pricing-page-tile-coming-soon-image"
                            />
                            <p className="pricing-page-quote-source-name">Pompato</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default PricingPage;