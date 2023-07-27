import * as React from "react"
import ColoredLogo from "../svgs/colored-logo.svg"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export const Step0 = ({ activePage, setState }) => {
    return (
        <div className={`step-${activePage}`}>
            <div className="step-content">
                <div className="step-heading">
                    Estuary is your automated data streaming control center
                </div>
                <div className="step-subheading">
                    <p>Move your data where, when, and how you need it…</p>
                    <p>
                        ...without scheduling, technical debt, or sacrificing
                        control.
                    </p>
                </div>
                <div
                    className="steps-cta start-start"
                    onClick={() => setState(1)}
                >
                    Start Tour
                </div>
            </div>
        </div>
    )
}
export const Step1 = ({ activePage, setState }) => {
    return (
        <div className={`step-${activePage}`}>
            <div className="step-content">
                <StaticImage
                    placeholder="none"
                    alt="Data Engineering Podcast"
                    loading="lazy"
                    src="../images/flow-images/step1-image.png"
                    layout="constrained"
                    width={950}
                    height={597}
                    quality={100}
                />
                <div
                    className="zoom-in-out-circle"
                    onClick={() => setState(2)}
                ></div>
                <div className="button-tooltip left">
                    <div className="tooltip-heading">Connect Source</div>
                    <div className="tooltip-description">
                        Choose from databases, SaaS APIs, filestores, pub-sub
                        systems, Vector DB, and more.
                    </div>
                    <div className="tooltip-action">
                        Click the dot to continue
                    </div>
                </div>
            </div>
        </div>
    )
}
export const Step2 = ({ activePage, setState }) => {
    return (
        <div className={`step-${activePage}`}>
            <div className="step-content">
                <StaticImage
                    placeholder="none"
                    alt="Data Engineering Podcast"
                    loading="lazy"
                    src="../images/flow-images/step2-image.png"
                    layout="constrained"
                    width={950}
                    height={597}
                    quality={100}
                />
                <div
                    className="zoom-in-out-circle"
                    onClick={() => setState(2)}
                ></div>
                <div className="button-tooltip top">
                    <div className="tooltip-heading">Automated Schema</div>
                    <div className="tooltip-description">
                        Flow infers and automatically evolves the best schemas
                        for your source data tables, streams, or API objects.
                    </div>
                    <div className="tooltip-description">
                        You're free to make changes, but you'll rarely want to.
                    </div>
                </div>
            </div>
        </div>
    )
}
export const Step3 = ({ activePage, setState }) => {
    return (
        <div className={`step-${activePage}`}>
            <div className="step-content">
                <StaticImage
                    placeholder="none"
                    alt="Data Engineering Podcast"
                    loading="lazy"
                    src="../images/flow-images/step2-image.png"
                    layout="constrained"
                    width={950}
                    height={597}
                    quality={100}
                />
                <div
                    className="zoom-in-out-circle"
                    onClick={() => setState(2)}
                ></div>
                <div className="button-tooltip top">
                    <div className="tooltip-heading">Automated Schema</div>
                    <div className="tooltip-description">
                        Flow infers and automatically evolves the best schemas
                        for your source data tables, streams, or API objects.
                    </div>
                    <div className="tooltip-description">
                        You're free to make changes, but you'll rarely want to.
                    </div>
                </div>
            </div>
        </div>
    )
}
export const Step7 = ({ activePage }) => {
    return (
        <div className={`step-${activePage}`}>
            <div className="step-content">
                <div className="step-heading">Predictable Pricing</div>
                <ul>
                    <li>$1.00/GB of change data</li>
                    <li>Free 10GB/mo</li>
                </ul>
                <div className="step-ctas">
                    <OutboundLink
                        target="_blank"
                        href="https://dashboard.estuary.dev/register"
                        className="pipeline-link"
                    >
                        Build a Pipeline
                    </OutboundLink>
                    <OutboundLink
                        target="_blank"
                        href="https://estuary.dev/vs-fivetran/"
                        className="compare-link"
                    >
                        Compare to Fivetran
                    </OutboundLink>
                </div>
            </div>
        </div>
    )
}

const WhyEstuary = () => {
    const [activePage, setActivePage] = React.useState(0)
    console.log(activePage)
    return (
        <main className="why-estuary">
            <div className="sidebar-wrap">
                <div className="sidebar-logo">
                    <Link className="global-header-logo-link" to="/">
                        <ColoredLogo
                            className="global-header-logo"
                            style={{ width: 27, height: 35 }}
                        />
                        <h1 className={"global-header-title"}>Estuary</h1>
                    </Link>
                </div>
                <div className="sidebar-nav">
                    <div
                        className={`nav-item ${
                            activePage === 0 ? "active" : ""
                        }`}
                        onClick={() => setActivePage(0)}
                    >
                        Welcome
                    </div>
                    <div
                        className={`nav-item ${
                            activePage === 1 ||
                            activePage === 2 ||
                            activePage === 3
                                ? "active"
                                : ""
                        }`}
                        onClick={() => setActivePage(1)}
                    >
                        Extract
                    </div>
                    <ul className="item-steps">
                        <li
                            className={`${activePage === 1 ? "active" : ""}`}
                            onClick={() => setActivePage(1)}
                        >
                            Create Capture
                        </li>
                        <li
                            className={`${activePage === 2 ? "active" : ""}`}
                            onClick={() => setActivePage(2)}
                        >
                            Discover Schema
                        </li>
                        <li
                            className={`${activePage === 3 ? "active" : ""}`}
                            onClick={() => setActivePage(3)}
                        >
                            Monitoring
                        </li>
                    </ul>
                    <div
                        className={`nav-item ${
                            activePage === 4 || activePage === 5 ? "active" : ""
                        }`}
                        onClick={() => setActivePage(4)}
                    >
                        Manage
                    </div>
                    <ul className="item-steps">
                        <li
                            className={`${activePage === 4 ? "active" : ""}`}
                            onClick={() => setActivePage(4)}
                        >
                            Store history & real-time
                        </li>
                        <li
                            className={`${activePage === 5 ? "active" : ""}`}
                            onClick={() => setActivePage(5)}
                        >
                            Streaming SQL Transforms
                        </li>
                    </ul>
                    <div
                        className={`nav-item ${
                            activePage === 6 ? "active" : ""
                        }`}
                        onClick={() => setActivePage(6)}
                    >
                        Load
                    </div>
                    <ul className="item-steps">
                        <li
                            className={`${activePage === 6 ? "active" : ""}`}
                            onClick={() => setActivePage(6)}
                        >
                            Stream to destination
                        </li>
                    </ul>
                    <div
                        className={`nav-item ${
                            activePage === 7 ? "active" : ""
                        }`}
                        onClick={() => setActivePage(7)}
                    >
                        Pricing
                    </div>
                    <ul className="item-steps">
                        <li
                            className={`${activePage === 7 ? "active" : ""}`}
                            onClick={() => setActivePage(7)}
                        >
                            Flat Pricing
                        </li>
                    </ul>
                </div>
                <div className="ctas-wrap">
                    <OutboundLink
                        target="_blank"
                        href="https://dashboard.estuary.dev/register"
                        className="pipeline-link"
                    >
                        Build a Pipeline
                    </OutboundLink>
                    <OutboundLink
                        target="_blank"
                        href="https://docs.estuary.dev/"
                        className="doc-link"
                    >
                        View Docs
                    </OutboundLink>
                </div>
            </div>
            <div className="main-content-wrap">
                <div className={`mac-bg step-bg-${activePage}`}>
                    {activePage === 0 && (
                        <Step0
                            activePage={activePage}
                            setState={setActivePage}
                        />
                    )}
                    {activePage === 1 && (
                        <Step1
                            activePage={activePage}
                            setState={setActivePage}
                        />
                    )}
                    {activePage === 2 && (
                        <Step2
                            activePage={activePage}
                            setState={setActivePage}
                        />
                    )}
                    {activePage === 3 && (
                        <Step3
                            activePage={activePage}
                            setState={setActivePage}
                        />
                    )}
                    {activePage === 7 && <Step7 activePage={activePage} />}
                </div>
                <div className="steps-controls">
                    <div
                        className="prev-step"
                        onClick={() =>
                            activePage === 0
                                ? setActivePage(0)
                                : setActivePage(activePage - 1)
                        }
                    >
                        <span>Previous</span>
                    </div>
                    <div
                        className="next-step"
                        onClick={() =>
                            activePage === 7
                                ? setActivePage(7)
                                : setActivePage(activePage + 1)
                        }
                    >
                        <span>Next</span>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default WhyEstuary
