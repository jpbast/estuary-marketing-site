import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import FlowLogo from "../svgs/flow-logo.svg"

const SectionTwo = () => {
    return (
        <div className="section-two">
            <div className="section-two-header-wrapper">
                <div className="section-two-header-subwrapper">
                    <h2 className="section-two-header">
                        Move and{" "}
                        <span className="section-two-header-colortext">
                            transform your data
                        </span>{" "}
                        from wherever it is to wherever you want it
                        <span className="section-two-header-colortext">
                            {" "}
                            in milliseconds
                        </span>
                        , without scheduling.
                    </h2>
                    <p>
                        Capture from Clouds, Databases and SaaS apps, create
                        real-time transformations and materialized views, for a
                        consistent, exact copy of your data powering both
                        analytics and operations.
                    </p>
                </div>
                <div className="section-two-header-vectors">
                    <FlowLogo className="product-flow-section-one-image" />
                </div>
            </div>
            <div className="section-two-first-graphic-wrapper">
                <StaticImage
                    placeholder="none"
                    alt="estuary data integration graphic"
                    src="../images/section-two-first-graphic.svg"
                    className="section-two-first-graphic"
                    layout="constrained"
                />
            </div>
            <div className="section-two-tiles-wrapper">
                <div className="section-two-tile-wrapper">
                    <div className="section-two-tile">
                        <h3 className="section-two-tile-title">
                            Tools the whole team can use
                        </h3>
                        <p>
                            Make updates through either the UI or CLI.
                            Programmatic access for the ability to easily embed
                            and whitelabel pipelines.
                        </p>
                    </div>
                    <div className="section-two-tile">
                        <h3 className="section-two-tile-title">Automation</h3>
                        <p>
                            No scheduling or orchestration tools required.
                            Automated schema generation and data deduplication.
                        </p>
                    </div>
                </div>
                <div className="section-two-tile-wrapper">
                    <div className="section-two-tile">
                        <h3 className="section-two-tile-title">Reliability</h3>
                        <p>99.9% platform reliability Security by design</p>
                    </div>
                    <div className="section-two-tile">
                        <h3 className="section-two-tile-title">Scale</h3>
                        <p>
                            Powering active workloads at 7GB/s CDC from any size
                            DB
                        </p>
                    </div>
                    <div className="section-two-tile">
                        <h3 className="section-two-tile-title">
                            Accuracy & Control
                        </h3>
                        <p>
                            Your pipelines, how you want them. Safeguard your
                            data products with built in, customizable schema
                            controls. Idempotent, exactly once semantics
                        </p>
                    </div>
                </div>

                <div className="section-two-bottom-header">
                    <div className="section-two-bottom-left">
                        <h2 className="section-two-bottom-title">
                            Real-time database replication
                        </h2>
                        <ul className="section-two-bottom-header-ul">
                            <li>
                                Powering exact copies of your data where you
                                want them. Supports databases of 10TB+.
                            </li>
                            <li>
                                Database connectors & real-time Salesforce
                                integration built in-house.
                            </li>
                            <li>
                                Supports airbyte protocol for batch-based
                                connectors. Bring any airbyte connector in and
                                run it. Access to 200+ connectors.
                            </li>
                        </ul>
                    </div>
                    <div className="section-two-bottom-right">
                        <StaticImage
                            placeholder="none"
                            alt="estuary product screenshot"
                            src="../images/section-two-bottom-screenshot.svg"
                            className="section-two-second-graphic"
                            layout="constrained"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionTwo
