import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import FlowLogo from "../svgs/flow-logo.svg"
import CareerAvatar from "../svgs/about-careers-avatar-icon.svg"
import EstuaryLogoSmall from "../svgs/estuary-logo-small.svg"
// @ts-ignore
import { StaticImage } from "gatsby-plugin-image"


const AboutPage = () => {
    return (
        <Layout headerTheme="light">
            <div className="product-flow-section-one-background-image-wrapper">
                <div className="product-flow-section-one">
                    <div className="product-flow-section-one-left">
                        <h1 className="about-section-one-h1">
                            Estuary is building the next generation of real-time data integration solutions.
                        </h1>
                        <p className="about-section-one-text">
                            We’re creating a new kind of DataOps platform that <span className="about-text-bold">empowers engineering teams</span> to build real-time, data-intensive applications at scale with minimal friction. This platform <span className="about-text-bold">unifies</span> a team’s databases, pub/sub systems, and SaaS around their data, <span className="about-text-bold">without requiring new investments in infrastructure</span> or development.
                        </p>
                        <p className="about-section-one-text about-section-margin-bottom">
                            Estuary <span className="about-text-bold">develops in the open</span> to produce both the runtime for our managed service and an ecosystem of open-source connectors. We’re passionate about providing data integration tools for users across a spectrum of use-cases, industries, and budgets. You can read more about our story here.
                        </p>

                    </div>
                    <div className="product-flow-section-one-right">
                        <FlowLogo className="product-flow-section-one-image" />
                    </div>
                </div>
            </div>
            <div className="about-section-two">
                <p className="product-flow-section-two-header-small">Come work with us</p>
                <h2 className="about-section-header">Careers</h2>
                <FlowLogo className="about-flow-logo product-flow-section-one-image"/>
                <div className="about-careers-text-wrapper">
                    <div className="icon-wrapper-medium">
                        <CareerAvatar className="product-flow-section-two-gif" />
                    </div>

                    <p className="about-careers-text"><span className="about-text-bold-regular">About you</span>: You’re passionate about the complexities and potential of our data-driven world, self-motivated, curious, and adaptable.</p>
                </div>
                <div className="about-careers-text-wrapper">
                <div className="icon-wrapper-medium">
                    <EstuaryLogoSmall className="product-flow-section-two-gif" />
                </div>
                    <p className="about-careers-text"><span className="about-text-bold-regular">About us</span>: We’re a rapidly growing, highly technical team built by successful repeat founders that’s working to take the friction out of data engineering.</p>
                </div>
                <Link
                    className="about-current-openings-button"
                    to="#"
                >
                    Current openings
                </Link>
            </div>
        </Layout>
    )
}

export default AboutPage