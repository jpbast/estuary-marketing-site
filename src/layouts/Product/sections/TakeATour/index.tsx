import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { Container, ContainerIcons, ContainerContent, ContainerImage, Title, Description, ContainerButton, Button } from "./styles"

const TakeATour = () => {
    return (
        <Container>
            <ContainerImage>
                <StaticImage                    
                    alt="Laptop"
                    src="../../../../images/lp-product/laptop.png"
                    layout="constrained"
                />
            </ContainerImage>
            <ContainerContent>
                <ContainerIcons>
                    <StaticImage
                        alt="Connection-1"
                        src="../../../../images/lp-product/connector-1.png"
                        width={80}
                        height={81}
                        quality={100}
                    />
                    <StaticImage                        
                        alt="connector-2"
                        src="../../../../images/lp-product/connector-2.png"
                        width={80}
                        height={81}
                        quality={100}
                    />
                    <StaticImage                        
                        alt="connector-3"
                        src="../../../../images/lp-product/connector-3.png"
                        width={80}
                        height={81}
                        quality={100}
                    />
                </ContainerIcons>
                <Title>TAKE A TOUR</Title>
                <Description>Learn more about how estuary can help with real-time replication.</Description>
                <ContainerButton>
                    <Button target="_blank" href="https://dashboard.estuary.dev/register">
                        Self-Guided Tour [1 min]
                    </Button>
                    <Button target="_blank" $secondary href="https://dashboard.estuary.dev/register">
                        Product Overview [30 min]
                    </Button>
                </ContainerButton>
            </ContainerContent>
        </Container>
    )
}

export default TakeATour