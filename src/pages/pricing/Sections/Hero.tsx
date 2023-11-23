import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { OutboundLink } from "gatsby-plugin-google-gtag"

const PricingHero = () => {
    return (
        <div className="pricing-page-top">
            <div className="pricing-page-top-left">
                <h1 className="product-flow-section-one-h1">
                    Simply priced, <br /> pay as you go
                </h1>
                <p className="pricing-page-subheader-text">
                    Get instant back-fills without instant
                    bad-bills. We price predictably, on{" "}
                    <strong>GB of change data</strong> moved per
                    month and{" "}
                    <strong>active connectors.</strong> Put
                    away the TI-83 trying to calculate ‘monthly
                    active rows’.
                </p>
                <div className="main-section-buttons">
                    <OutboundLink
                        target="_blank"
                        href="https://dashboard.estuary.dev/register"
                        className="section-one-try-it-button"
                    >
                        Build free pipeline
                    </OutboundLink>
                    <OutboundLink
                        target="_blank"
                        href="/about/#contact-us"
                        className="section-one-demo-button"
                    >
                        Contact Us
                    </OutboundLink>
                </div>
            </div>
            <div className="pricing-page-top-right">
                <StaticImage
                    placeholder="none"
                    alt="pricing logo"
                    src="../images/dude_desk_plant.png"
                    layout="fixed"
                    className="icon-image pricing-landing-image"
                />
            </div>
            <div className="main-section-buttons-mobile">
                <OutboundLink
                    target="_blank"
                    href="https://dashboard.estuary.dev/register"
                    className="section-one-try-it-button"
                >
                    Build free pipeline
                </OutboundLink>
            </div>
        </div>
    )
}

export default PricingHero
