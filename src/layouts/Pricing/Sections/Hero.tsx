import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { OutboundLink } from "gatsby-plugin-google-gtag"

import HubspotModal from "../../../components/HubspotModal"

const PricingHero = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="pricing-page-top">
            <div>
                <h1>
                    Simply priced, pay as you go
                </h1>
                <p>
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
                    <button
                        className="section-one-demo-button"
                        onClick={() => setOpen(true)}
                    >
                        Contact Us
                    </button>
                </div>
            </div>
            <div className="image-container">
                <StaticImage
                    placeholder="none"
                    alt="pricing logo"
                    src="../../../images/dude_desk_plant.png"
                    width={500}
                    height={500}
                    loading="eager"
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
            <HubspotModal open={open} onClose={() => setOpen(false)} portalId="8635875" formId="698e6716-f38b-4bd5-9105-df9ba220e29b" />
        </div>
    )
}

export default PricingHero
