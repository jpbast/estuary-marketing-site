import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import SignUp from "../components/signup"
import HeroImageDesktop from "../svgs/estuary-vs-debezium-hero.svg"
import HeroImageMobile from "../svgs/estuary-vs-debezium-hero-mobile.svg"
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
            "<a href='https://debezium.io/' target='_blank'>Open-Source</a> project for streaming change data into (primarily) Apache Kafka.",
        mattersValue: "n/a",
    },
    {
        featureName: "Price",
        estuaryValue:
            "Open-Source, or Fully-Managed pipelines at $1.50 per GB of change events with 10gb free",
        competitorValue:
            "Open-Source. Typically requires 2-3 full-time senior resources for production grade pipelines.",
        mattersValue:
            "Ask the CFO :). But really, open-source may or may not be cheaper all. With Debezium, you'll need to run the hardware and hire the team to support it.",
    },
    {
        featureName: "Pre-reqs",
        estuaryValue: "Logical Decoding for Write-Ahead Log or Binlog enabled",
        competitorValue:
            "Replication Slots to WAL/binlog, Kafka (usually), Kafka Connect, ZooKeeper",
        mattersValue:
            "The team should be highly proficient in Java to properly manage these packages",
    },
    {
        featureName: "CDC Connectors",
        estuaryValue:
            "MongoDB, MySQL,PostgreSQL, SQL Server, Salesforce, Firestore + <a href='https://estuary.dev/integrations/' target='_blank'>80 others</a> sources and destinations",
        competitorValue: "MongoDB, MySQL, PostgreSQL, SQL Server, Oracle, DB2",
        mattersValue:
            "Debezium support limited to databases and no SaaS APIs. Estuary does not support Oracle/DB2",
    },
    {
        featureName: "On-Prem",
        estuaryValue: "Fall 2023",
        competitorValue: "Yes",
        mattersValue: "Diff tools for on-prem needed if using Estuary Flow",
    },
    {
        featureName: "Dev Ops",
        estuaryValue: "No resource management as Flow will manage the shards",
        competitorValue:
            "<a href='https://estuary.dev/debezium-alternatives/' target='_blank'>Requires allocating CPU resources continuously</a>",
        mattersValue:
            "<a href='https://estuary.dev/debezium-alternatives/' target='_blank'>Data can be throttled, if not fully lost, depending on Topic retention window) if insufficient resources are available.</a>",
    },
    {
        featureName: "Delivery",
        estuaryValue: "Exactly-Once",
        competitorValue:
            "<a href='https://debezium.io/documentation/faq/#why_must_consuming_applications_expect_duplicate_events' target='_blank'>At-least Once</a>",
        mattersValue:
            "Duplicates can be created in the consumer, creating excess cost. Else, each consumer will need de-dupe step",
    },
    {
        featureName: "Scalability",
        estuaryValue:
            "Estuary manages partitioning of tables and communicates with replication slot. This avoids DB memory problems that would otherwise put a limit on uptake.",
        competitorValue:
            "A connector <a href='https://instaclustr.medium.com/change-data-capture-cdc-with-kafka-connect-and-the-debezium-postgresql-source-connector-13a48eabfcb2' target='_blank'>handles 7K change events/second.</a> Tables can be manually partitioned and multiple connectors created for more scalability.",
        mattersValue:
            "For teams working with large tables, there will be significant addl .overhead in deployment. Manual partition and added multiple connectors will be req.",
    },
    {
        featureName: "Schema Migrations",
        estuaryValue: "Automated schema evolution",
        competitorValue:
            "Row-level data capture, but downstream consumers will have to be manually updated",
        mattersValue:
            "If source data rarely changes, no problem. If it changes often, there will be manual work to update each consumer schema",
    },
    {
        featureName: "Backfills",
        estuaryValue:
            "Data stored in a <a href='https://docs.estuary.dev/concepts/collections/' target='_blank'>real-time data lake</a>, no manual backfills",
        competitorValue:
            "Manually triggered backfills to replay log from a point in time for a new consumer",
        mattersValue:
            "You will have to kickstart a backfill with a manual operation",
    },
    {
        featureName: "Transforms",
        estuaryValue:
            "Streaming stateful SQL transforms and joins on both real-time and history data",
        competitorValue:
            "<a href='https://www.morling.dev/blog/single-message-transforms-swiss-army-knife-of-kafka-connect/' target='_blank'>Single-Message Transforms</a> can perform basic transforms of a single message",
        mattersValue:
            "You'll need an additional stream processing platform for more complex transformations",
    },
]
const EstuaryVsDebezium = () => {
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
                                <br /> Debezium
                            </div>
                            <div className="hero-subheading">
                                A COMPARISON OF STREAMING CDC DEPLOYS
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
                    <div className="hero-image-wrap">
                        <StaticImage
                            placeholder="none"
                            alt="Reality of Debezium"
                            loading="lazy"
                            src="../images/lp-comparison/reality-of-debezium.webp"
                            layout="constrained"
                            width={900}
                            height={275}
                            quality={100}
                        />
                    </div>
                </section>
                <section className="comparison-table">
                    <div className="table-heading">
                        <div className="heading-item">FEATURES</div>
                        <div className="heading-item">ESTUARY</div>
                        <div className="heading-item">DEBEZIUM</div>
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
                            <b>empowers data teams</b> to build <b>real-time,</b>
                            data-intensive pipelines and applications, at scale,
                            <b>with minimal friction,</b> in a <b>UI or CLI</b>. We aim to
                            make real-time data <b>accessible to the analyst</b>, while
                            bringing power tooling to the streaming enthusiast.
                            Flow <b>unifies</b> a team's databases, pub/sub systems,
                            and SaaS around their data, without requiring new
                            investments in infrastructure or development.
                        </p>
                        <p className="about-content">
                            Estuary <b>develops in the open</b> to produce both the
                            runtime for our managed service and an ecosystem of
                            <b>open-source</b> connectors. You can read more about{" "}
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

export default EstuaryVsDebezium
