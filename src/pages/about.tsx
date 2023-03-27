import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import FlowLogo from "../svgs/flow-logo.svg"
import CareerAvatar from "../svgs/about-careers-avatar-icon.svg"
import EstuaryLogoSmall from "../svgs/estuary-logo-small.svg"
import BuildingsIcon from "../svgs/about-careers-building.svg"
import BenefitsIcon from "../svgs/about-careers-benefits-icon.svg"
import CultureIcon from "../svgs/about-careers-culture-icon.svg"
import CommunityIcon from "../svgs/about-careers-community-icon.svg"
import LinkIcon from "../svgs/link-icon.svg"
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
                <FlowLogo className="about-flow-logo product-flow-section-one-image" />
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
            <div className="about-section-three">
                <p className="product-flow-section-two-header-small">What's it like</p>
                <div className="about-section-three-top">
                    <h2 className="about-section-header-top">Working at Estuary</h2>
                    <FlowLogo className="product-flow-section-one-image" />
                </div>
                <div className="about-section-three-card-wrapper">
                    <div className="about-section-three-card">
                        <div className="icon-wrapper-medium-gray">
                            <BuildingsIcon />
                        </div>
                        <p className="about-card-title">Location</p>
                        <p>We offer offices in both our New York City and Columbus, Ohio locations, as well as the ability to work remotely.</p>
                    </div>
                    <div className="about-section-three-card">
                        <div className="icon-wrapper-medium-gray">
                            <BenefitsIcon />
                        </div>
                        <p className="about-card-title">Benefits</p>
                        <p>We provide 100% employee coverage on healthcare, 401k, competitive equity, and unlimited time vacation leave.</p>
                    </div>
                    <div className="about-section-three-card">
                        <div className="icon-wrapper-medium-gray">
                            <CultureIcon />
                        </div>
                        <p className="about-card-title">Culture</p>
                        <p>Like the product we build, our culture is forward-thinking and open. Our team operates on a foundation of trust, is resourceful, collaborative, but also independent.</p>
                    </div>
                    <div className="about-section-three-card">
                        <div className="icon-wrapper-medium-gray">
                            <CommunityIcon />
                        </div>
                        <p className="about-card-title">Community</p>
                        <p>We offer perks including team happy hours, weekly lunches, and quarterly off-sites. With our rapid growth, now’s an exciting time to come aboard.</p>
                    </div>
                </div>
                <p className="about-referral-text">Know somebody who would be a good fit? We offer a $2,500 referral bonus.</p>
            </div>
            <div className="about-section-four-current-openings">
                <p className="product-flow-section-two-header-small">Apply today</p>
                <h2 className="about-section-header-top">Current Openings</h2>
                <div className="about-section-current-openings-wrapper">
                    <div className="about-current-openings-list">
                        <p className="about-current-opening-title">Solutions Engineer</p>
                        <p className="about-current-opening-title">Developer Evangelist</p>
                        <Link
                            className="about-get-in-touch-button"
                            to="#"
                        >
                            Get in touch to apply
                        </Link>
                    </div>
                    <div className="about-current-openings-description-wrapper">
                        <div className="about-current-openings-title-wrapper">
                            <p className="about-opening-title">Solutions Engineer</p>
                            <Link to="#" className="about-link">
                                <LinkIcon />
                            </Link>
                        </div>
                        <div className="about-current-openings-location-wrapper">
                            <p className="about-location-text">Location:</p>
                            <p className="about-location-text">&nbsp;New York, NY</p>
                            <p className="about-location-text">; Hybrid or remote</p>
                        </div>
                        <div>
                            <p>As Estuary’s first Solution Engineer, you will work directly with our founding team to help companies unlock the power of their real-time data. Working at the intersection of engineering, product and customers, your work will have a huge impact on Estuary’s product roadmap and help create a seamless experience for users. We’re looking for individuals with an insatiable curiosity for getting into the weeds of technical challenges and an empathetic approach to teaching others. A strong desire to work within a start-up environment without the constraints of large companies is imperative. You will be given the freedom and opportunity to chart your own path and take your career to the next level.</p>
                        </div>
                        <div>
                            <p className="about-bold">Responsibilities</p>
                            <ul>
                                <li>Focus on detailed use-cases to create a great end-to-end experience for customers.
                                </li>
                                <li>Take a lead role in understanding user pain points to develop a strategic vision of our product roadmap.
                                </li>
                                <li>Create internal documentation of technical requirements for prospective customers.
                                </li>
                                <li>Engage in user-support channels for questions and issues raised by Flow users
                                </li>
                                <li>Provide technical support through independent investigation.
                                </li>
                                <li>Act as a trusted conduit with customers and prospects in order to influence their data strategy.
                                </li>
                                <li>Build a perspective on customer and market trends.
                                </li>
                                <li>Communicate technical feature requests.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="about-bold">Qualifications</p>
                            <ul>
                                <li>Bachelor’s degree in computer science, data science or related field or equivalent technical & business experience.

                                </li>
                                <li>Exceptional written and verbal communication.
                                </li>
                                <li>Strong interpersonal and relationship building skills.

                                </li>
                                <li>Understand the value of balancing customer-centric thinking with technical know-how.

                                </li>
                                <li>Foundational understanding and practical ability to code with two or more modern scripting languages (e.g. Python, SQL, node.js) and/or popular programming languages (e.g. C/C++, C#).

                                </li>
                                <li>Experience working with both technical and non-technical stakeholders.
                                </li>
                            </ul>
                        </div>
                        <div className="current-openings-divider"></div>
                        <div className="about-current-openings-title-wrapper">
                            <p className="about-opening-title">Developer Evangelist</p>
                            <Link to="#" className="about-link">
                                <LinkIcon />
                            </Link>
                        </div>
                        <div className="about-current-openings-location-wrapper">
                            <p className="about-location-text">Location:</p>
                            <p className="about-location-text">&nbsp;New York, NY;</p>
                            <p className="about-location-text"> &nbsp;Columbus, OH;</p>
                            <p className="about-location-text">&nbsp; or remote</p>
                        </div>
                        <div>
                            <p>As a Developer Evangelist, you will help fulfill Estuary's mission by connecting with other developers, contributing to open-source, and sharing your knowledge and experience about Estuary Flow and other leading technologies. You'll attend conferences and meetups, produce articles, contribute to podcasts, and engage in social media. Your work will foster a community inspired by Estuary and will drive our strategy around developer love and Estuary’s participation in the open-source ecosystem.</p>
                        </div>
                        <div>
                            <p>We focus on generating awareness by rolling up our sleeves, contributing to the ecosystem, and enabling others to become evangelists outside the company as well. Not afraid to be hands-on, you might write sample code, author client libraries, provide insights to journalists, and work with strategic Estuary partners.</p>
                        </div>
                        <div>
                            <p className="about-bold">Responsibilities</p>
                            <ul>
                                <li>Lead the conversation around the latest technology advancements and best practices in the developer community.

                                </li>
                                <li>Create engaging content, including technical talks, blog posts, demos, and videos, that educates developers on important technologies and trends.

                                </li>
                                <li>Support Estuary’s product and engineering efforts by sharing what you learn while engaging with the wider Estuary community and the tech community, at large.

                                </li>
                                <li>Conduct interviews with media representatives via phone, podcasts, video, and in-person.

                                </li>
                                <li>Be a leader within Estuary and in the wider community.
                                </li>

                            </ul>
                        </div>
                        <div>
                            <p className="about-bold">Qualifications</p>
                            <ul>
                                <li>Bachelor’s degree in computer science, data science or related field or equivalent technical & business experience.

                                </li>
                                <li>Exceptional written and verbal communication.
                                </li>
                                <li>Strong interpersonal and relationship building skills.

                                </li>
                                <li>Understand the value of balancing customer-centric thinking with technical know-how.

                                </li>
                                <li>Foundational understanding and practical ability to code with two or more modern scripting languages (e.g. Python, SQL, node.js) and/or popular programming languages (e.g. C/C++, C#).

                                </li>
                                <li>Experience working with both technical and non-technical stakeholders.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AboutPage