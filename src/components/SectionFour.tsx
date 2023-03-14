import * as React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const SectionFour = () => {
    return (
        <div className="section-four">
            <p className="section-four-header-small">FEATURES</p>
            <div className="section-four-header-wrapper">
                <h2>A robust set of features</h2>
                <div className="section-four-header-vectors">
                    <StaticImage
                        placeholder="none"
                        alt="estuary logo top"
                        src="../images/estuary-top-logo-vector-2.svg"
                        className="section-four-header-vector"
                        layout="constrained"
                    />
                    <StaticImage
                        placeholder="none"
                        alt="estuary logo bottom"
                        src="../images/estuary-top-logo-vector-1.svg"
                        className="section-four-header-vector"
                        layout="constrained"
                    />
                </div>
            </div>
            <div>
                <div className="section-four-tile-wrapper">
                    <div className="section-four-tile">
                        <StaticImage
                            placeholder="none"
                            alt="data feature tile icon"
                            src="../images/1section-four-tile-icon.svg"
                            className="section-four-tile-icon"
                            layout="fixed"
                        />
                        <h3 className="section-four-tile-title">
                            Data replication & migration
                        </h3>
                        <p className="section-four-tile-subtext">
                            Centralize data with real-time replication.
                        </p>
                    </div>
                    <div className="section-four-tile">
                        <StaticImage
                            placeholder="none"
                            alt="data feature tile icon"
                            src="../images/2section-four-tile-icon.svg"
                            className="section-four-tile-icon"
                            layout="fixed"
                        />
                        <h3 className="section-four-tile-title">
                            Streaming ELT
                        </h3>
                        <p className="section-four-tile-subtext">
                            ELT in real-time for always up-to-date data in your
                            warehouse of choice.
                        </p>
                    </div>
                    <div className="section-four-tile">
                        <StaticImage
                            placeholder="none"
                            alt="data feature tile icon"
                            src="../images/3section-four-tile-icon.svg"
                            className="section-four-tile-icon"
                            layout="fixed"
                        />
                        <h3 className="section-four-tile-title">
                            Data Modernization
                        </h3>
                        <p className="section-four-tile-subtext">
                            Seamlessly connect legacy systems to a modern hybrid
                            cloud environment that’s fully extensible.
                        </p>
                    </div>
                    <div className="section-four-tile">
                        <StaticImage
                            placeholder="none"
                            alt="data feature tile icon"
                            src="../images/4section-four-tile-icon.svg"
                            className="section-four-tile-icon"
                            layout="fixed"
                        />
                        <h3 className="section-four-tile-title">Data mesh</h3>
                        <p className="section-four-tile-subtext">
                            Power your data mesh in real time with tools that
                            your entire company can use.
                        </p>
                    </div>
                </div>
                <div className="section-four-tile-wrapper">
                    <div className="section-four-tile">
                        <StaticImage
                            placeholder="none"
                            alt="data feature tile icon"
                            src="../images/5section-four-tile-icon.svg"
                            className="section-four-tile-icon"
                            layout="fixed"
                        />
                        <h3 className="section-four-tile-title">
                            Operational analytics
                        </h3>
                        <p className="section-four-tile-subtext">
                            Understand the performance impact of your real-time
                            analytical workloads.
                        </p>
                    </div>
                    <div className="section-four-tile">
                        <StaticImage
                            placeholder="none"
                            alt="data feature tile icon"
                            src="../images/6section-four-tile-icon.svg"
                            className="section-four-tile-icon"
                            layout="fixed"
                        />
                        <h3 className="section-four-tile-title">
                            Customer 360
                        </h3>
                        <p className="section-four-tile-subtext">
                            Gain a unified view of your customers while your
                            team interacts with them. Real-time with historical
                            data.
                        </p>
                    </div>
                    <div className="section-four-tile">
                        <StaticImage
                            placeholder="none"
                            alt="data feature tile icon"
                            src="../images/7section-four-tile-icon.svg"
                            className="section-four-tile-icon"
                            layout="fixed"
                        />
                        <h3 className="section-four-tile-title">
                            Real-time analytics
                        </h3>
                        <p className="section-four-tile-subtext">
                            Use plain old SQL for streaming analytics on your
                            data to react to business events in real time.
                        </p>
                    </div>
                    <div className="section-four-tile">
                        <StaticImage
                            placeholder="none"
                            alt="data feature tile icon"
                            src="../images/8section-four-tile-icon.svg"
                            className="section-four-tile-icon"
                            layout="fixed"
                        />
                        <h3 className="section-four-tile-title">
                            Data sharing
                        </h3>
                        <p className="section-four-tile-subtext">
                            Securely allow other users access to your realtime
                            data products, and materialize them into whatever
                            destination system they want.
                        </p>
                    </div>
                </div>
                <div className="section-four-try-it-button-wrapper">
                    <p className="section-four-try-it-header-text">
                        Use it free with hands-on support.  Scale without
                        bounds.
                    </p>
                    <Link className="section-four-try-it-button" to="#">
                        Try it free
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SectionFour
