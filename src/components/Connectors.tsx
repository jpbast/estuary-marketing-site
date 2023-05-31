import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import { useMemo, useState } from "react"
import { useLunr } from "react-lunr"
import { normalizeConnector } from "../utils"
import FlowLogo from "../svgs/flow-logo.svg"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import ChevronRight from "@mui/icons-material/ChevronRight"
import SearchIcon from "@mui/icons-material/Search"
import { ConnectorsLink } from "./ConnectorsLink"
import BackgroundImageWrapper from "./BackgroundImageWrapper"
import { isMobile } from "react-device-detect"

export interface ConnectorsProps {
    connectorType: "capture" | "materialization"
    title?: string
    description?: string
    bottomTitle?: string
    bottomDescription?: string
    onlyCards?: boolean
    showAllConnectors?: boolean
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
                <GatsbyImage
                    image={logo.childImageSharp.gatsbyImageData}
                    alt={`${title} Logo`}
                    className="connector-post-card-image icon-wrapper"
                    loading="eager"
                />
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
    onlyCards = false,
    showAllConnectors = false
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
                                gatsbyImageData(
                                    layout: CONSTRAINED
                                    placeholder: NONE
                                    quality: 95
                                )
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

    const mappedConnectorsAll = useMemo(
        () =>
            postgres.allConnectors.nodes
                .map(normalizeConnector)
                .filter(connector => connector.type === connectorType),
        [postgres]
    )


    const logosByConnectorId = useMemo(
        () =>
            Object.assign(
                {},
                ...mappedConnectors.map(con => ({ [con.id]: con.logo }))
            ),
        [mappedConnectors]
    )

    const [query, setQuery] = useState("")
    const results = useLunr(
        query.length > 0
            ? query
                .split(" ")
                .map(term => `${term}* ${term}~1`)
                .join(" ")
            : "",
        index,
        store
    ).filter(res => (res as any).type === connectorType)

    return (
        <BackgroundImageWrapper>
            <div className="blogs-index-header-wrapper">
                {!onlyCards && (
                    <div className="connector-index-header">
                        <div style={{ maxWidth: "30rem" }}>
                            <h2>{title}</h2>
                            <p>{description}</p>
                        </div>
                        <div
                            style={{ display: "block" }}
                            className="blog-post-header-vectors"
                        >
                            {isMobile ? <span className="dont-show"></span> : <FlowLogo className="product-flow-section-one-image" />}

                        </div>
                    </div>
                )}
                {!onlyCards && (
                    <div className="connectors-search">
                        <div className="connectors-search-body">
                            <div
                                className="blogs-index-search"
                                style={{ marginBottom: 0 }}
                            >
                                <SearchIcon className="blogs-index-input-adornment" />
                                <input
                                    style={{ border: "1px solid #D7DCE5" }}
                                    placeholder={`Search ${title}`}
                                    type="text"
                                    value={query}
                                    onChange={evt => setQuery(evt.target.value)}
                                />
                            </div>
                            <ConnectorsLink />
                        </div>
                    </div>
                )}

                <div className="connector-cards">
                    {/* //insert showAllConnectors prop here to swap out mappedConnectors for mappedConnectorsAll */}
                    {(query.length > 0 ? results : mappedConnectors).map(
                        connector => (
                            <ConnectorCard
                                {...connector}
                                logo={logosByConnectorId[connector.id]}
                            />
                        )
                    )}
                </div>
            </div>

            {!onlyCards && (
                <>
                    <div className="connector-onlycards-background-image">
                        <div className="connector-onlycards">
                            <h2>All your data, </h2>
                            <h2>where you need it</h2>
                            <p>
                                Consolidate your data into the leading warehouses,
                                then integrate with your tools of choice.
                            </p>
                        </div>
                    </div>


                    <div className="connector-bottom-link">
                        <div style={{ maxWidth: "30rem" }}>
                            <h2>{bottomTitle}</h2>
                            <p>{bottomDescription}</p>
                            <Link to={`/${bottomTitle.toLowerCase()}`} className="connector-bottom-button">
                                See all {bottomTitle.toLowerCase()}
                            </Link>
                        </div>
                        <div
                            style={{ display: "block" }}
                            className="connector-bottom-vector"
                        >
                            <FlowLogo className="connector-bottom-flow" />

                            <StaticImage
                                src="../images/connectors-bottom.png"
                                alt={bottomTitle}
                                width={500}
                            />
                        </div>
                    </div>
                </>
            )}
        </BackgroundImageWrapper>
    )
}
