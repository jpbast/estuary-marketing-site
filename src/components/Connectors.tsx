import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import { useMemo, useState } from "react"
import { useLunr } from "react-lunr"
import { normalizeConnector } from "../utils"

export interface ConnectorsProps {
    connectorType: "capture" | "materialization"
    title: string
    description: string
    bottomTitle: string
    bottomDescription: string
}

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
        <>
            {(query.length > 0 ? results : mappedConnectors).map(connector => (
                <div>
                    <Link to={connector.slug}>
                        {connector.title} - {connector.slug}
                    </Link>
                </div>
            ))}
        </>
    )
}
