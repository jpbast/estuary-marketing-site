import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { Wrapper, Container, ContainerContent, ContainerImage, Title, PrimaryTextColor, SecondaryTextColor, ContainerTopics, Topic, Button } from "./style"

const OurConnectors = () => {
    return (
        <Wrapper>
            <Container>
                <ContainerImage>
                    <StaticImage
                        className="mobile-image"
                        placeholder="none"
                        alt="our connectors"
                        src="../../../../images/lp-product/our-connectors-mobile.png"
                        layout="constrained"
                        width={336}
                        height={748}
                        quality={100}
                    />
                    <StaticImage
                        className="desktop-image"
                        placeholder="none"
                        alt="our connectors"
                        src="../../../../images/lp-product/our-connectors-desktop.png"
                        layout="constrained"
                    />
                </ContainerImage>
                <ContainerContent>
                    <div>
                        <Title>USE <PrimaryTextColor>OUR</PrimaryTextColor> <SecondaryTextColor>CONNECTORS,</SecondaryTextColor></Title>
                        <Title>ADD <PrimaryTextColor>YOUR</PrimaryTextColor> <SecondaryTextColor>CONNECTORS.</SecondaryTextColor></Title>
                    </div>
                    <ContainerTopics>
                        <Topic>Capture using log-based CDC or SaaS systems in real-time with custom-built Estuary connectors</Topic>
                        <Topic>Bring your own connector through open protocol</Topic>
                    </ContainerTopics>
                    <Button target="_blank" to="/integrations">
                        View connectors
                    </Button>
                </ContainerContent>
            </Container>
        </Wrapper>
    )
}

export default OurConnectors