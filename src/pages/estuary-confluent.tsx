import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import SignUp from "../components/signup"
import HeroImageDesktop from "../svgs/estuary-confluent.svg"
import HeroImageMobile from "../svgs/estuary-confluent-mobile.svg"
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
            "Company behind Apache Kafka. They offer managed Kafka and connectors into and out of Kafka.",
        mattersValue: "n/a",
    },
    {
        featureName: "Price",
        estuaryValue:
            "Open-Source, or predictably priced pipelines at $1.50 / GB of change events with 10gb free",
        competitorValue:
            "<a href='https://www.confluent.io/confluent-cloud/connect-pricing/'>Pricing</a> based on data transferred ($0.20/gb) and cluster usage ($0.20/gb). and cost per hour??? ",
        mattersValue: "Estuary is priced solely on change events, which ... ",
    },
    {
        featureName: "Latency",
        estuaryValue:
            "<100ms. Only constraint is frequency of updates from the source, or what the destination can handle.",
        competitorValue: "<100ms. Based on their own version of Kafka.",
        mattersValue:
            "Faster data leads to 2x better marketing outcomes (Gartner) and enables real-time ML and insights.",
    },
    {
        featureName: "Connectors",
        estuaryValue:
            "<a href='https://estuary.dev/integrations/'>100+ connectors</a>. Also HTTP file, webhook, and ability to spin up most new connectors within a week",
        competitorValue:
            "<a href='https://www.confluent.io/product/connectors/'>60+ connectors</a> with half built in-house and half open-source. No exact characteristics on materialization connectors nor reductions.",
        mattersValue:
            "Best for Kafka users. CDC connectors are fully-managed <a href='https://estuary.dev/debezium-alternatives/'>Debezium w/ associated tradeoffs</a>",
    },
    {
        featureName: "On-Prem",
        estuaryValue: "Coming Fall 2023",
        competitorValue: "Yes",
        mattersValue: "Diff tools for on-prem needed if using Estuary Flow",
    },
    {
        featureName: "Delivery",
        estuaryValue: "Exactly-Once",
        competitorValue: "At-least Once",
        mattersValue:
            "Duplicates can be created in the consumer, creating excess cost. Else, each consumer will need de-dupe step",
    },
    {
        featureName: "Schema Migrations",
        estuaryValue: "Automated Schema Evolution",
        competitorValue:
            "Users manually manage the <a href='https://docs.confluent.io/platform/current/schema-registry/index.html#schemaregistry-intro'>Schema Registry</a> to validate and evolve data and schema",
        mattersValue:
            "If source data rarely changes, no problem. If it changes often, there will be manual work to update each consumer schema",
    },
    {
        featureName: "Data Lake",
        estuaryValue:
            "Ingested data stored in a <a href='https://docs.estuary.dev/concepts/collections/'>real-time data lake</a> in customers cloud storage",
        competitorValue:
            "Data is stored in the Kafka Kafka topic or persisted to a batch layer. Joining the two layers is difficult though.",
        mattersValue:
            "By storing data in a real-time data lake, you can endlessly distribute off one ingest... saving you egress fees, credits, and source system stress",
    },
    {
        featureName: "Transforms",
        estuaryValue:
            "Streaming SQL transforms and joins on both real-time and history data. DBT as a destination",
        competitorValue:
            "<a href='https://www.morling.dev/blog/single-message-transforms-swiss-army-knife-of-kafka-connect/'>Single-Message Transforms</a> can perform basic transforms of a single message or can use ksql for broader streaming joins",
        mattersValue:
            "If data needs to be joined in flight or you need to do more than simple transforms, you'll need additional stream processing platform",
    },
    {
        featureName: "Vector DBs & AI",
        estuaryValue: "Pinecone",
        competitorValue: "None",
        mattersValue: "Teams quickly demanding support for vector DBs",
    },
    {
        featureName: "Requires Windowing",
        estuaryValue: "No",
        competitorValue:
            "Joins are done in <a href='https://www.jesse-anderson.com/2019/10/why-i-recommend-my-clients-not-use-ksql-and-kafka-streams/'>ksql</a> and <a href='https://www.jesse-anderson.com/2019/10/why-i-recommend-my-clients-not-use-ksql-and-kafka-streams/'>require windowing</a>",
        mattersValue:
            "Streaming and batch joins are more complex to implement and with likely lower join rates when defining windows on the datasets is required",
    },
]

const EstuaryVsConfluent = () => {
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
                                <br /> Confluent
                            </div>
                            <div className="hero-subheading">
                                A COMPARISON OF STREAMING PLATFORMS
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
                        <div className="heading-item">CONFLUENT</div>
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
                        <Link to="" aria-label="fivetran">
                            <FiveTran />
                        </Link>
                        <Link to="" aria-label="striim">
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
                        <Link to="" aria-label="confluent">
                            <Confluent />
                        </Link>
                        <Link to="" aria-label="airbyte">
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

export default EstuaryVsConfluent
