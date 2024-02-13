import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { Container, ContainerContent, ContainerImage, Title, ContainerTopics, Topic, Button } from "./styles"

const DataIntoStream = () => {
    return (
        <Container>
            <ContainerImage>
                <StaticImage
                    placeholder="none"
                    alt="take a tour"
                    src="../../../../images/lp-product/take-a-tour.png"
                    layout="constrained"
                />
            </ContainerImage>
            <ContainerContent>
                <Title>TURN YOUR DATABASE INTO <span>A STREAM</span></Title>
                <ContainerTopics>
                    <Topic>Cloud-storage backed CDC w/ heart beats ensures reliability even if your destination is down -- a significant advantage vs ELT vendors;</Topic>
                    <Topic>Deliver every insert, update, and delete in milliseconds as either a change log or fully reduced view in your destination system;</Topic>
                    <Topic>No topic and resource management - just configure a connector and go;</Topic>
                    <Topic>Distributed architecture enables endless scaling with exactly-once semantics.</Topic>
                </ContainerTopics>
                <Button target="_blank" href="https://dashboard.estuary.dev/register">
                    Build free Pipeline
                </Button>
            </ContainerContent>
        </Container>
    )
}

export default DataIntoStream