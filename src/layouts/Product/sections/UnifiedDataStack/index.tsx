import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { Wrapper, Container, ContainerContent, ContainerImage, Title, Description, ContainerTopics, Topic, Button } from "./styles"

const UnifiedDataStack = () => {
    return (
        <Wrapper>
            <Container>
                <ContainerImage>
                    <StaticImage
                        placeholder="none"
                        alt="take a tour"
                        src="../../../../images/lp-product/data-stream.png"
                        layout="constrained"
                    />
                </ContainerImage>
                <ContainerContent>
                    <Title>UNIFIED DATA STACK FOR, <span>ANALYTICS, OPERATIONS AND AI PIPELINES</span></Title>
                    <Description>Empower your whole team around a unified view of your data for seamless analytics, data products and AI pipelines.</Description>
                    <ContainerTopics>
                        <Topic>No-code analytics pipelines or build from a CLI;</Topic>
                        <Topic>Powerful, millisecond latency data products with streaming sql and typescript transformations;</Topic>
                        <Topic>Real-time generative AI pipelines;</Topic>
                        <Topic>Which are all idempotent, real-time, production-grade and SOC2 certified.</Topic>
                    </ContainerTopics>
                    <Button target="_blank" href="https://dashboard.estuary.dev/register">
                        Learn more
                    </Button>
                </ContainerContent>
            </Container>
        </Wrapper>
    )
}

export default UnifiedDataStack