import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import SignUp from "../components/signup"
import HeroImageDesktop from "../svgs/estuary-airbyte.svg"
import HeroImageMobile from "../svgs/estuary-airbyte-mobile.svg"
import FiveTran from "../svgs/fivetran-logo.svg"
import Confluent from "../svgs/confluent-logo.svg"
import Airbyte from "../svgs/airbyte-logo.svg"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
const comparisonContent = [
    {
        featureName: "Summary",
        estuaryValue:
            "Self-serve streaming data platform for building real-time pipelines. Company behind <a href='https://github.com/gazette/core' target='_blank'>Gazette</a> and <a href='https://github.com/estuary/flow' target='_blank'>Estuary Flow OSS</a>",
        competitorValue:
            "Large provider of <a href='https://github.com/airbytehq'>open-source</a> batch ELT data integration connectors + a fully managed platform",
        mattersValue: "n/a",
    },
    {
        featureName: "Price",
        estuaryValue:
            "Open-Source, or predictably priced pipelines at $1.50 / GB of change events with 10gb free",
        competitorValue:
            "Based on <a href='https://airbyte.com/pricing'>credits</a>: <br/><br/>*$10 per gigabyte for DB<br/>*$15 per million rows for APIs",
        mattersValue:
            "Estuary is less than half the price for the same pipeline. Fivetran bills you exponentially for normalizing your data. (Read Fivetran pricing breakdown)",
    },
    {
        featureName: "Latency",
        estuaryValue:
            "<100ms. Only constraint is frequency of updates from the source, or what the destination can handle.",
        competitorValue: "Minimum possible latency is 5 minutes",
        mattersValue:
            "Faster data leads to 2x better marketing outcomes (Gartner) and enables real-time ML and insights.",
    },
    {
        featureName: "Connectors",
        estuaryValue:
            "<a href='https://estuary.dev/integrations/'>100+ connectors</a>. Also HTTP file, webhook, and ability to spin up most new connectors within a week",
        competitorValue:
            "<a href='https://airbyte.com/connectors'>340+</a> connectors. 50+ of which are GA. Also file-based ingestion and webhooks. Custom connector builder available.",
        mattersValue:
            "Airbyte connectors are community buily. This enables a large library but also meaning quality can be inconsistent w/o modifications. Estuary will pull in Airbyte connetors that pass our QA.",
    },
    {
        featureName: "On-Prem",
        estuaryValue: "Coming Fall 2023",
        competitorValue: "Yes. OSS.",
        mattersValue: "Diff tools for on-prem needed if using Estuary Flow",
    },
    {
        featureName: "Delivery",
        estuaryValue: "Exactly-Once",
        competitorValue: "At-least Once",
        mattersValue:
            "Duplicates can be created in the consumer, creating excess cost.Else, each consumer will need a de-dupe and may have inaccurate results",
    },
    {
        featureName: "ETL",
        estuaryValue: "Yes",
        competitorValue: "ELT Only.",
        mattersValue:
            "Extraneous data loaded to warehouse driving more compute expense",
    },
    {
        featureName: "Schema Migrations",
        estuaryValue: "Automated Schema Evolution",
        competitorValue:
            "Monitors for schema evolution every 24 hours and alerts users on changes. Modifications not propagated downstream",
        mattersValue:
            "If source data rarely changes, no problem. If it changes often, there will be manual work to update each consumer schema",
    },
    {
        featureName: "Data Lake",
        estuaryValue:
            "Ingested data stored in a <a href='https://docs.estuary.dev/concepts/collections/'>real-time data lake</a> in customers cloud storage",
        competitorValue:
            "Every new pipeline is made from scratch and begins with a new capture",
        mattersValue:
            "By storing data in a real-time data lake, you can endlessly distribute off one ingest... saving you egress fees, credits, and source system stress",
    },
    {
        featureName: "Transforms",
        estuaryValue:
            "Streaming SQL transforms and joins on both real-time and history data. DBT as a destination",
        competitorValue: "Transforms take place in your warehouse with DBT",
        mattersValue:
            "If data needs to be joined in flight, you'll need an additional stream processing platform and your warehousing costs will go up",
    },
    {
        featureName: "Vector DBs & AI",
        estuaryValue: "Pinecone",
        competitorValue: "Weaviate",
        mattersValue: "Teams quickly demanding support for vector DBs",
    },
]

const EstuaryVsAirbyte = () => {
    const [isMobile, setMobile] = React.useState(false)
    const checkIfMobile = () =>
        typeof window !== "undefined" && window.innerWidth < 845
            ? setMobile(true)
            : setMobile(false)

    React.useEffect(() => {
        window.addEventListener("load", checkIfMobile, false)
        window.addEventListener("resize", checkIfMobile, false)

        return () => {
            window.removeEventListener("load", checkIfMobile, false)
            window.removeEventListener("resize", checkIfMobile, false)
        }
    }, [])

    return (
        <Layout headerTheme="light">
            <div className="lp-comparison-wrap">
                <section className="hero-section">
                    <div className="hero-container">
                        <div className="hero-left">
                            <div className="hero-heading">
                                Estuary Flow
                                <br /> vs
                                <br /> Airbyte
                            </div>
                            <div className="hero-subheading">
                                A COMPARISON OF ETL/ELT PLATFORMS
                            </div>
                        </div>
                        <div className="hero-right">
                            {isMobile ? (
                                <HeroImageMobile />
                            ) : (
                                <HeroImageDesktop />
                            )}
                        </div>
                    </div>
                </section>
                <section className="comparison-table">
                    <div className="table-heading">
                        <div className="heading-item">FEATURES</div>
                        <div className="heading-item">ESTUARY</div>
                        <div className="heading-item">AIRBYTE</div>
                        <div className="heading-item">Why it matters</div>
                    </div>
                    <div className="table-data">
                        {comparisonContent.map((item, index) => {
                            return (
                                <div className="table-row" key={index}>
                                    <div className="feature-name">
                                        {item.featureName}
                                    </div>
                                    <div
                                        className="estuary-value"
                                        dangerouslySetInnerHTML={{
                                            __html: isMobile
                                                ? `<div>ESTUARY</div> ${item.estuaryValue}`
                                                : item.estuaryValue,
                                        }}
                                    >
                                        {}
                                    </div>
                                    <div
                                        className="competitor-value"
                                        dangerouslySetInnerHTML={{
                                            __html: isMobile
                                                ? `<div>DEBEZIUM</div> ${item.competitorValue}`
                                                : item.competitorValue,
                                        }}
                                    />
                                    <div
                                        className="matters-value"
                                        dangerouslySetInnerHTML={{
                                            __html: isMobile
                                                ? `<div>WHY IT MATTERS</div> ${item.mattersValue}`
                                                : item.mattersValue,
                                        }}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </section>
                <div className="cta-wrap-single">
                    <a href="https://dashboard.estuary.dev/register">
                        Build a pipeline
                    </a>
                </div>
                <section className="comparison-to-others">
                    <div className="comparison-heading">
                        See how Estuary compares to others
                    </div>
                    <div className="comparison-links">
                        <Link to="/estuary-fivetran" aria-label="fivetran">
                            <FiveTran />
                        </Link>
                        <Link to="/estuary-striim" aria-label="striim">
                            <StaticImage
                                placeholder="none"
                                alt="Striim logo"
                                loading="lazy"
                                src="../images/lp-comparison/Striim-Logo-Dark.png"
                                layout="constrained"
                                width={167}
                                height={64}
                                quality={100}
                            />
                        </Link>
                        <Link to="/estuary-confluent" aria-label="confluent">
                            <Confluent />
                        </Link>
                        <Link to="/estuary-airbyte" aria-label="airbyte">
                            <Airbyte />
                        </Link>
                    </div>
                </section>
                <section className="about-estuary">
                    <div className="about-wrap">
                        <div className="about-heading">About Estuary</div>
                        <div className="about-subheading">
                            Estuary is building the next generation of real-time
                            data integration solutions.
                        </div>
                        <p className="about-content">
                            We're creating a new kind of DataOps platform that
                            <b>empowers data teams</b> to build{" "}
                            <b>real-time,</b>
                            data-intensive pipelines and applications, at scale,
                            <b>with minimal friction,</b> in a <b>UI or CLI</b>.
                            We aim to make real-time data{" "}
                            <b>accessible to the analyst</b>, while bringing
                            power tooling to the streaming enthusiast. Flow{" "}
                            <b>unifies</b> a team's databases, pub/sub systems,
                            and SaaS around their data, without requiring new
                            investments in infrastructure or development.
                        </p>
                        <p className="about-content">
                            Estuary <b>develops in the open</b> to produce both
                            the runtime for our managed service and an ecosystem
                            of
                            <b>open-source</b> connectors. You can read more
                            about{" "}
                            <Link to="/the-estuary-story-and-guiding-principles">
                                our story here.
                            </Link>
                        </p>
                    </div>
                </section>
                <SignUp />
            </div>
        </Layout>
    )
}

export const Head = () => {
    return (
        <Seo
            title={"Solutions"}
            description={
                "Estuary allows enterprises of any size to deploy true real-time pipelines that scale for high-volume use cases — without making difficult trade-offs or investing in complex infrastructure."
            }
        />
    )
}

export default EstuaryVsAirbyte
