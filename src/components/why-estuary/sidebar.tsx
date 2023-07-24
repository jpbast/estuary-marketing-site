import * as React from "react"
import ColoredLogo from "../../svgs/colored-logo.svg"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { Link } from "gatsby"

const Sidebar = ({state}) => {
    state = 'active'
    return (
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
                <div className={`${state} nav-item`}>Welcome</div>
                <div className="nav-item">Extract</div>
                <ul className="item-steps">
                    <li>Create Capture</li>
                    <li>Discover Schema</li>
                    <li>Monitoring</li>
                </ul>
                <div className="nav-item">Manage</div>
                <ul className="item-steps">
                    <li>Store history & real-time</li>
                    <li>Streaming SQL Transforms</li>
                </ul>
                <div className="nav-item">Load</div>
                <ul className="item-steps">
                    <li>Stream to destination</li>
                </ul>
                <div className="nav-item">Pricing</div>
                <ul className="item-steps">
                    <li>Flat Pricing</li>
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
    )
}

export default Sidebar
