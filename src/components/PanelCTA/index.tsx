import React from "react"
import { OutboundLink } from "gatsby-plugin-google-gtag"

import SlackIcon from "../../svgs/slack-colors.svg"
import WebinarIcon from "../../svgs/webinar-colors.svg"

const PanelCTA = () => {
    return (
        <div className="sided-panel-cta-container">
            <div className="sided-panel-cta">
                <div className="text-content">
                    <p>No-code ETL & CDC 101</p>
                    <OutboundLink href="https://try.estuary.dev/webinar_realtime_101/">Join Next Webinar</OutboundLink>
                </div>
                <div className="icon-content">
                    <WebinarIcon className="social-icon social-icon-2xl" />
                </div>
            </div>
            <div className="sided-panel-cta">
                <div className="text-content">
                    <p>Questions?</p>
                    <OutboundLink href="https://estuary-dev.slack.com/join/shared_invite/zt-86nal6yr-VPbv~YfZE9Q~6Zl~gmZdFQ#/shared-invite/email">Join our Slack</OutboundLink>
                </div>
                <div className="icon-content">
                    <SlackIcon className="social-icon" />
                </div>
            </div>
        </div>
    )
}

export default PanelCTA
