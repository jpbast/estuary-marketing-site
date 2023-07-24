import * as React from "react"
import ColoredLogo from "../../svgs/colored-logo.svg"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { Link } from "gatsby"

export const StepPricing = ({ stepState }) => {
    return (
        <div className={`step-${stepState}`}>
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

export const Step1 = ({ stepState }) => {
    return (
        <div className={`step-${stepState}`}>
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
                <div className="steps-cta start-start">Start Tour</div>
            </div>
        </div>
    )
}

const MainContent = ({ state }) => {
    return (
        <div className="main-content-wrap">
            <div className="mac-bg-1">
                <Step1 stepState={'welcome'}/>
            </div>
        </div>
    )
}

export default MainContent
