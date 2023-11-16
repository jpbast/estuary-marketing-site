import React from "react"
import { OutboundLink } from "gatsby-plugin-google-gtag"

import SlackIcon from "../../svgs/slack-outline.svg"

const PanelCTA = () => {
    return (
        <div className="sided-panel-cta-container">
            <div className="sided-panel-cta">
                <div className="text-content">
                    <p>No-code ETL & CDC 101</p>
                    <OutboundLink href="https://try.estuary.dev/webinar_realtime_101/">Join Next Webinar</OutboundLink>
                </div>
                <div className="icon-content">
                    <SlackIcon className="social-icon" />
                </div>
            </div>
            <div className="sided-panel-cta">
                <div className="text-content">
                    <p>Questions?</p>
                    <OutboundLink href="https://try.estuary.dev/webinar_realtime_101/">Join our Slack</OutboundLink>
                </div>
                <div className="icon-content">
                    <SlackIcon className="social-icon" />
                </div>
            </div>
            <div className="sided-panel-stream">
                <p>Start streaming your data for free</p>
                <OutboundLink
                    href="https://dashboard.estuary.dev/register"
                    className="pipeline-link"
                >
                    Try it Free
                </OutboundLink>
            </div>
        </div>
    )
}

export default PanelCTA
