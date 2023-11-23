import React from "react"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { Link } from "gatsby"

import BlackCheckmark from "../../../svgs/checkmark-black.svg"
import WhiteCheckmark from "../../../svgs/light-checkmark.svg"
import PricingOpenSource from "../../../svgs/pricing-page-open-source.svg"
import PurpleRectangle from "../../../svgs/purple_rectangle.svg"
import WhiteRectangle from "../../../svgs/white_rectangle.svg"
import PricingCloud from "../../../svgs/cloud-pricing.svg"
import PricingEnterprise from "../../../svgs/pricing-page-enterprise.svg"

const ChecklistItem = ({ children, white = false }) => (
    <div className="pricing-page-checklist-item">
        {white ? (
            <>
                <WhiteCheckmark className="pricing-page-tile-checkmark-image" />
                <p className="pricing-page-tile-checklist-item-text text-white">{children}</p>
            </>
        ) : (
            <>
                <BlackCheckmark className="pricing-page-tile-checkmark-image" />
                <p className="pricing-page-tile-checklist-item-text">{children}</p>
            </>
        )}
    </div>
)

const PricingPlans = () => {

    return (
        <div className="plan-container">
            <div className="heading">
                <h2>Plans</h2>
            </div>
            <div className="pricing-page-tiles-wrapper">
                <div className="pricing-page-tile">
                    <PricingOpenSource className="pricing-page-tile-icon" />
                    <PurpleRectangle className="pricing-page-rectangle" />
                    <p className="pricing-page-tile-name">Free</p>
                    <p className="pricing-page-price">
                        <span className="pricing-page-price">
                            $0/GB
                        </span>
                    </p>
                    <div className="pricing-page-checklist-wrapper">
                        <ChecklistItem>
                            Up to 10GB / mo for any 2 connectors
                        </ChecklistItem>
                        <ChecklistItem>
                            Millisecond Latency
                        </ChecklistItem>
                        <ChecklistItem>
                            UI & CLI for building & monitoring pipelines
                        </ChecklistItem>
                        <ChecklistItem>
                            Limited Data Retention in Estuary Cloud
                        </ChecklistItem>
                        <ChecklistItem>
                            Incremental Syncing for lower CDC cost
                        </ChecklistItem>
                        <ChecklistItem>
                            Streaming Infrastructure
                        </ChecklistItem>
                    </div>
                    <Link
                        className="pricing-page-tile-button"
                        to="https://dashboard.estuary.dev/register"
                    >
                        Get started
                    </Link>
                </div>
                <div className="pricing-page-tile-purple">
                    <p className="pricing-page-corner-text">30-Day <br /> Free Trial</p>
                    <PricingCloud className="pricing-page-tile-icon" />
                    <WhiteRectangle className="pricing-page-rectangle" />
                    <p className="pricing-page-tile-name text-white">Cloud</p>
                    <div className="pricing-page-checklist-wrapper">
                        <p className="pricing-page-price text-white">
                            $1/GB
                        </p>
                        <ChecklistItem white>
                            $1/GB change data moved +$.14/hour/connector
                        </ChecklistItem>
                        <ChecklistItem white>All features of Free plan, plus... </ChecklistItem>
                        <ChecklistItem white>
                            Data stored in your cloud
                        </ChecklistItem>
                        <ChecklistItem white>99.9% uptime SLA</ChecklistItem>


                        <ChecklistItem white>
                            Unlimited Connectors
                        </ChecklistItem>
                        <ChecklistItem white>
                            9x5 Customer Support via Slack/Email
                        </ChecklistItem>
                    </div>
                    <OutboundLink
                        target="_blank"
                        href="https://dashboard.estuary.dev/register"
                        className="pricing-page-tile-button-white"
                    >
                        Try it free
                    </OutboundLink>
                </div>
                <div className="pricing-page-tile">
                    <PricingEnterprise className="pricing-page-tile-icon" />
                    <PurpleRectangle className="pricing-page-rectangle" />
                    <p className="pricing-page-tile-name">Enterprise</p>
                    <p className="pricing-page-price">
                        <span className="pricing-page-price">
                            Custom Pricing
                        </span>
                    </p>
                    <div className="pricing-page-checklist-wrapper-custom">
                        <ChecklistItem>
                            All features of Free + Cloud, plus...
                        </ChecklistItem>
                        <ChecklistItem>
                            SOC2 & HIPPA Certificates
                        </ChecklistItem>
                        <ChecklistItem>
                            Customer Success Manager
                        </ChecklistItem>
                        <ChecklistItem>
                            24x7 support available
                        </ChecklistItem>
                        <ChecklistItem>
                            Provisioned servers
                        </ChecklistItem>

                    </div>
                    <Link
                        className="pricing-page-tile-button"
                        to="/about#contact-us"
                    >
                        Contact us
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PricingPlans
