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

const jobs = [
    {
        "title": "Solutions Engineer",
        "location": "New York, NY",
        "workEnvironment": "Hybrid or remote",
        "description": "As Estuary’s first Solution Engineer, you will work directly with our founding team to help companies unlock the power of their real-time data. Working at the intersection of engineering, product and customers, your work will have a huge impact on Estuary’s product roadmap and help create a seamless experience for users. We’re looking for individuals with an insatiable curiosity for getting into the weeds of technical challenges and an empathetic approach to teaching others. A strong desire to work within a start-up environment without the constraints of large companies is imperative. You will be given the freedom and opportunity to chart your own path and take your career to the next level.",
        "responsibilities": [
            "Focus on detailed use-cases to create a great end-to-end experience for customers.",
            "Take a lead role in understanding user pain points to develop a strategic vision of our product roadmap.",
            "Create internal documentation of technical requirements for prospective customers.",
            "Engage in user-support channels for questions and issues raised by Flow users.",
            "Provide technical support through independent investigation.",
            "Act as a trusted conduit with customers and prospects in order to influence their data strategy.",
            "Build a perspective on customer and market trends.",
            "Communicate technical feature requests."
        ],
        "qualifications": [
            "Bachelor’s degree in computer science, data science or related field or equivalent technical & business experience.",
            "Exceptional written and verbal communication.",
            "Strong interpersonal and relationship building skills.",
            "Understand the value of balancing customer-centric thinking with technical know-how.",
            "Foundational understanding and practical ability to code with two or more modern scripting languages (e.g. Python, SQL, node.js) and/or popular programming languages (e.g. C/C++, C#).",
            "Experience working with both technical and non-technical stakeholders."
        ]
    },
    {
        "title": "Developer Evangelist",
        "location": "New York, NY; Columbus, OH",
        "workEnvironment": "Hybrid or remote",
        "description": "As Estuary’s first Solution Engineer, you will work directly with our founding team to help companies unlock the power of their real-time data. Working at the intersection of engineering, product and customers, your work will have a huge impact on Estuary’s product roadmap and help create a seamless experience for users. We’re looking for individuals with an insatiable curiosity for getting into the weeds of technical challenges and an empathetic approach to teaching others. A strong desire to work within a start-up environment without the constraints of large companies is imperative. You will be given the freedom and opportunity to chart your own path and take your career to the next level.",
        "responsibilities": [
            "Focus on detailed use-cases to create a great end-to-end experience for customers.",
            "Take a lead role in understanding user pain points to develop a strategic vision of our product roadmap.",
            "Create internal documentation of technical requirements for prospective customers.",
            "Engage in user-support channels for questions and issues raised by Flow users.",
            "Provide technical support through independent investigation.",
            "Act as a trusted conduit with customers and prospects in order to influence their data strategy.",
            "Build a perspective on customer and market trends.",
            "Communicate technical feature requests."
        ],
        "qualifications": [
            "Bachelor’s degree in computer science, data science or related field or equivalent technical & business experience.",
            "Exceptional written and verbal communication.",
            "Strong interpersonal and relationship building skills.",
            "Understand the value of balancing customer-centric thinking with technical know-how.",
            "Foundational understanding and practical ability to code with two or more modern scripting languages (e.g. Python, SQL, node.js) and/or popular programming languages (e.g. C/C++, C#).",
            "Experience working with both technical and non-technical stakeholders."
        ]
    },
]



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
                        <p className="about-card-text">We offer offices in both our New York City and Columbus, Ohio locations, as well as the ability to work remotely.</p>
                    </div>
                    <div className="about-section-three-card">
                        <div className="icon-wrapper-medium-gray">
                            <BenefitsIcon />
                        </div>
                        <p className="about-card-title">Benefits</p>
                        <p className="about-card-text">We provide 100% employee coverage on healthcare, 401k, competitive equity, and unlimited time vacation leave.</p>
                    </div>
                    <div className="about-section-three-card">
                        <div className="icon-wrapper-medium-gray">
                            <CultureIcon />
                        </div>
                        <p className="about-card-title">Culture</p>
                        <p className="about-card-text">Like the product we build, our culture is forward-thinking and open. Our team operates on a foundation of trust, is resourceful, collaborative, but also independent.</p>
                    </div>
                    <div className="about-section-three-card">
                        <div className="icon-wrapper-medium-gray">
                            <CommunityIcon />
                        </div>
                        <p className="about-card-title">Community</p>
                        <p className="about-card-text">We offer perks including team happy hours, weekly lunches, and quarterly off-sites. With our rapid growth, now’s an exciting time to come aboard.</p>
                    </div>
                </div>
                <p className="about-referral-text">Know somebody who would be a good fit? We offer a $2,500 referral bonus.</p>
            </div>
            <div className="about-section-four-current-openings">
                <p className="product-flow-section-two-header-small">Apply today</p>
                <h2 className="about-section-header-top">Current Openings</h2>
                <div className="about-section-current-openings-wrapper">
                    <div className="about-current-openings-list">
                        {jobs.length > 0 ? jobs.map(job => (
                            <p className="about-current-opening-title">{job.title}</p>
                        )) : null}
                        <Link
                            className="about-get-in-touch-button"
                            to="#"
                        >
                            Get in touch to apply
                        </Link>
                    </div>
                    <div className="about-current-openings-description-wrapper">
                        {jobs.length > 0 ? jobs.map(job => (
                            <>
                                <div className="about-current-openings-title-wrapper">
                                    <p className="about-opening-title">{job.title}</p>
                                    <Link to="#" className="about-link">
                                        <LinkIcon />
                                    </Link>
                                </div>
                                <div className="about-current-openings-location-wrapper">
                                    <p className="about-opening-text">Location:</p>
                                    <p className="about-opening-text">&nbsp;{job.location}</p>
                                    <p className="about-opening-text">; {job.workEnvironment}</p>
                                </div>
                                <div>
                                    <p className="about-opening-text">{job.description}</p>
                                </div>
                                <div>
                                    {job.responsibilities ? <p className="about-bold about-opening-text about-margin-top">Responsibilities</p> : null}

                                    {job.responsibilities ? job.responsibilities.map(resp => (
                                        <ul>
                                            <li className="about-opening-text">{resp}</li>
                                        </ul>
                                    )) : null}
                                </div>
                                <div>
                                    <p className="about-bold about-opening-text about-margin-top">Qualifications</p>

                                    {job.qualifications ? job.qualifications.map(qual => (
                                        <ul>
                                            <li className="about-opening-text">{qual}</li>
                                        </ul>
                                    )) : null}
                                </div>
                                <Link
                                    className="about-get-in-touch-button-mobile"
                                    to="#"
                                >
                                    Get in touch to apply
                                </Link>
                                <div className="current-openings-divider"></div>

                            </>
                        )) : null}

                    </div>
                </div>
            </div>
            <div className="about-section-five">
                <h2 className="about-section-five-header">Let's talk about your data</h2>
                <p className="about-section-five-text">Have a specific question or comment? Send us a note and a team member will reach out to you shortly.</p>
                <form className="form-wrapper">
                    <div className="form-subwrapper">
                        <input className="about-form-input input-halfWidth" placeholder="First Name">
                        </input>
                        <input className="about-form-input input-halfWidth" placeholder="Last Name">
                        </input>
                    </div>
                    <div className="form-subwrapper">
                        <input className="about-form-input input-halfWidth" placeholder="Company Email">
                        </input>
                        <input className="about-form-input input-halfWidth" placeholder="Phone Number">
                        </input>
                    </div>
                    <div className="form-subwrapper-mobile">
                        <input className="about-form-input" placeholder="First Name">
                        </input>
                        <input className="about-form-input" placeholder="Last Name">
                        </input>
                        <input className="about-form-input" placeholder="Company Email">
                        </input>
                        <input className="about-form-input" placeholder="Phone Number">
                        </input>
                    </div>

                    <input className="about-form-input input-fullWidth" placeholder="Your subject"></input>
                    <Link
                    className="about-current-openings-get-in-touch"
                    to="#"
                >
                    Get in touch
                </Link>
                </form>

            
            </div>
        </Layout>
    )
}

export default AboutPage