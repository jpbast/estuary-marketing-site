import * as React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const SectionFive = () => {
    return (
        <div className="section-five">
            <div className="section-five-header-wrapper">
                <p className="section-five-header-small">TESTIMONIALS</p>
                <h2 className="section-five-header">What our customers say</h2>
            </div>
            <div className="section-five-tile-wrapper">
                <div className="section-five-tile">
                    <p className="section-five-tile-text">“We're a big fan of Estuary's real-time, no code model. It's magic that we're getting real time data without much effort and we don't have to spend time thinking about broken pipelines. We've also experienced fantastic support by Estuary, sometimes they go as far as to make a change for us if it's easier for them to do so."</p>
                    <div className="section-five-logo-wrapper">
                        <StaticImage
                            alt="Flashpack"
                            src="../images/flashpack-logo.svg"
                            className="section-five-header-vector"
                            layout="fixed"
                        />
                        <p className="section-five-tile-logo-text">Flashpack</p>
                    </div>
                </div>
                <div className="section-five-tile">
                    <p className="section-five-tile-text">“Estuary Flow allows us to integrate low-latency CDC and connect to SaaS apps across our entire reporting stack and it’s the only solution that we’ve found that lets us do both.”</p>
                    <div className="section-five-logo-wrapper">
                        <StaticImage
                            alt="estuary logo top"
                            src="../images/deepsync-logo.svg"
                            className="section-five-header-vector"
                            layout="fixed"
                        />
                        <p className="section-five-tile-logo-text">Deep Sync</p>
                    </div>
                </div>
                <div className="section-five-tile">
                    <p className="section-five-tile-text">“Estuary is the only system we’ve found that can seamlessly replicate large scale Firestore data for analytics.  After months of research and trying everything, we can confidently say that Estuary is the only company that can help us get easy, accurate analytics on our data within Snowflake."</p>
                    <div className="section-five-logo-wrapper">
                        <StaticImage
                            alt="estuary logo top"
                            src="../images/coalesce-logo.svg"
                            className="section-five-header-vector"
                            layout="fixed"
                        />
                        <p className="section-five-tile-logo-text">Coalesce</p>
                    </div>
                </div>


                <div className="section-five-tile">
                    <p className="section-five-tile-text">“This tool is 1000x times better than LogStash or Elastic Enterprise Data Ingestion Tool, which has many issues.”</p>
                    <div className="section-five-logo-wrapper">
                        <StaticImage
                            alt="estuary logo top"
                            src="../images/pompato-logo.svg"
                            className="section-five-header-vector"
                            layout="fixed"
                        />
                        <p className="section-five-tile-logo-text">Pompato</p>
                    </div>
                </div>
                <div className="section-five-tile">
                    <p className="section-five-tile-text">“We needed a platform to help us optimize marketing campaigns with low-latency.  Estuary provided an unparalleled solution to do that at terabyte scale."</p>
                    <div className="section-five-logo-wrapper">
                        <StaticImage
                            alt="estuary logo top"
                            src="../images/fenestra-logo.svg"
                            className="section-five-header-vector"
                            layout="fixed"
                        />
                        <p className="section-five-tile-logo-text">Fenestra</p>
                    </div>
                </div>
                <div className="section-five-tile">
                    <p className="section-five-tile-text">“It's very rewarding to find a cloud product actually works when the configuration is correct.”</p>
                    <div className="section-five-logo-wrapper">
                        <StaticImage
                            alt="estuary logo top"
                            src="../images/a-avatar.svg"
                            className="section-five-header-vector"
                            layout="fixed"
                        />
                        <p className="section-five-tile-logo-text">Anna Bansaghi, Engineer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SectionFive