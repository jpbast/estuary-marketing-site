import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material"
import { useStaticQuery, graphql } from "gatsby"
import React, { useMemo, useState } from "react"
import { normalizeConnector } from "../utils"

export const ConnectorsLink = () => {
    const {
        postgres: {
            allConnectors: { nodes: connectors },
        },
    } = useStaticQuery(graphql`
        query ConnectorsForLink {
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
    const [captureConnectors, materializationConnectors] = useMemo(() => {
        let mapped: ReturnType<typeof normalizeConnector>[] =
            connectors.map(normalizeConnector)

        return [
            mapped.filter(connector => connector.type === "capture"),
            mapped.filter(connector => connector.type === "materialization"),
        ]
    }, [connectors])

    const [sourceId, setSourceId] = useState<string>(null)
    const [destinationId, setDestinationId] = useState<string>(null)

    const destinationHref = useMemo(() => {
        if (sourceId && destinationId) {
            return `/integrations/${
                captureConnectors.find(c => c.id === sourceId)?.slugified_name
            }-to-${
                materializationConnectors.find(c => c.id === destinationId)
                    ?.slugified_name
            }`
        } else {
            return "#"
        }
    }, [captureConnectors, materializationConnectors, sourceId, destinationId])
    return (
        <div className="connectors-link-wrapper">
            <FormControl className="connector-link-form-control" fullWidth>
                <InputLabel>Sources</InputLabel>
                <Select
                    label="Sources"
                    value={sourceId}
                    onChange={evt => setSourceId(evt.target.value)}
                    variant="outlined"
                >
                    {captureConnectors.map(c => (
                        <MenuItem
                            key={c.id}
                            value={c.id}
                            classes={{ root: "connectors-link-menu-item" }}
                        >
                            <img
                                src={c.logoUrl}
                                className={"connectors-link-menu-img"}
                            />
                            {c.title}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl className="connector-link-form-control" fullWidth>
                <InputLabel>Destinations</InputLabel>
                <Select
                    label="Destinations"
                    value={destinationId}
                    onChange={evt => setDestinationId(evt.target.value)}
                    variant="outlined"
                >
                    {materializationConnectors.map(c => (
                        <MenuItem
                            key={c.id}
                            value={c.id}
                            classes={{ root: "connectors-link-menu-item" }}
                        >
                            <img
                                src={c.logoUrl}
                                className={"connectors-link-menu-img"}
                            />
                            {c.title}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <a className="connector-link-button" href={destinationHref}>
                Details
            </a>
        </div>
    )
}
