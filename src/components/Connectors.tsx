import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import { useMemo, useState } from "react"
import { useLunr } from "react-lunr"
import { normalizeConnector } from "../utils"
import FlowLogo from "../svgs/flow-logo.svg"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import ChevronRight from "@mui/icons-material/ChevronRight"

export interface ConnectorsProps {
    connectorType: "capture" | "materialization"
    title: string
    description: string
    bottomTitle: string
    bottomDescription: string
}

const truncate = (val: string, max: number) => {
    if (val.length > max) {
        let words = val.split(" ")
        let allowed = []
        let len = 0
        while (len < max) {
            let word = words.shift()
            allowed.push(word)
            len = len + word.length + 1
        }
        return `${allowed.join(" ")}...`
    } else {
        return val
    }
}

const ConnectorCard = ({
    title,
    shortDescription,
    recommended,
    logo,
    slug,
    type,
}: ReturnType<typeof normalizeConnector>) => (
    <Link to={`${slug}`}>
        <div className="connector-card">
            <div className="connector-card-top">
                {logo && (
                    <GatsbyImage
                        alt=""
                        image={logo.childImageSharp.gatsbyImageData}
                        className="connector-post-card-image icon-wrapper"
                        loading="eager"
                    />
                )}
                {recommended && (
                    <>
                        <div style={{ flexGrow: 1 }} />
                        <div>
                            <p className="connector-post-card-recommended">
                                RECOMMENDED
                            </p>
                        </div>
                    </>
                )}
            </div>
            <h4>{title}</h4>
            {shortDescription?.length > 0 && (
                <p>{truncate(shortDescription || "", 100)}</p>
            )}
            <div style={{ flexGrow: 1 }} />
            <span className="connector-card-read-more">
                Read More <ChevronRight />
            </span>
        </div>
    </Link>
)

export const Connectors = ({
    connectorType,
    title,
    description,
    bottomTitle,
    bottomDescription,
}: ConnectorsProps) => {
    const {
        postgres,
        localSearchConnectors: { index, store },
    } = useStaticQuery(graphql`
        query ConnectorsRootQuery {
            localSearchConnectors {
                index
                store
            }
            postgres {
                allConnectors(orderBy: [RECOMMENDED_DESC, CREATED_AT_DESC]) {
                    nodes {
                        id
                        externalUrl
                        imageName
                        shortDescription
                        longDescription
                        title
                        logoUrl
                        logo {
                            childImageSharp {
                                gatsbyImageData(layout: CONSTRAINED)
                            }
                        }
                        recommended
                        connectorTagsByConnectorIdList {
                            protocol
                        }
                    }
                }
            }
        }
    `)

    const mappedConnectors = useMemo(
        () =>
            postgres.allConnectors.nodes
                .map(normalizeConnector)
                .filter(connector => connector.type === connectorType),
        [postgres]
    )

    const [query, setQuery] = useState("")
    const results = useLunr(
        query.length > 0
            ? query
                  .split(" ")
                  .map(term => `${term}~2`)
                  .join(" ")
            : "",
        index,
        store
    )

    return (
        <div className="blogs-index-wrapper" style={{ marginBottom: "10rem" }}>
            <div className="blogs-index-header-wrapper">
                <div className="connector-index-header">
                    <div style={{ maxWidth: "30rem" }}>
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                    <div
                        style={{ display: "block" }}
                        className="blog-post-header-vectors"
                    >
                        <FlowLogo className="product-flow-section-one-image" />
                    </div>
                </div>

                <div className="connector-cards">
                    {(query.length > 0 ? results : mappedConnectors).map(
                        connector => (
                            <ConnectorCard {...connector} />
                        )
                    )}
                </div>
            </div>

            <div className="connector-index-bottom">
                <h2>All your data, where you need it</h2>
                <span>
                    Consolidate your data into the leading warehouses, then
                    integrate with your tools of choice.
                </span>
            </div>

            <div className="connector-index-header">
                <div style={{ maxWidth: "30rem" }}>
                    <h2>{bottomTitle}</h2>
                    <p>{bottomDescription}</p>
                </div>
                <div
                    style={{ display: "block" }}
                    className="blog-post-header-vectors"
                >
                    <StaticImage
                        src="../images/connectors-bottom.png"
                        alt={bottomTitle}
                        width={500}
                    />
                </div>
            </div>
        </div>
    )
}
