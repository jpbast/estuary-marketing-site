import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { Wrapper, Container, ContainerIcons, ContainerContent, ContainerLeft, ContainerImage, Title, Description, ContainerButton, Button, ActionLink } from "./styles"

const TakeATour = () => {
    return (
        <Wrapper>
            <Container>
                <ContainerLeft>
                    <ContainerImage>
                        <StaticImage                    
                            alt="Laptop"
                            src="../../../../images/BigQuery/TakeATour/video.png"
                            layout="constrained"
                        />
                    </ContainerImage>
                </ContainerLeft>
                <ContainerContent>
                    <ContainerIcons>
                        <StaticImage
                            alt="Connection-1"
                            src="../../../../images/lp-product/connector-1.png"
                            width={80}
                            height={80}
                            quality={100}
                        />
                        <StaticImage                        
                            alt="connector-2"
                            src="../../../../images/lp-product/connector-2.png"
                            width={80}
                            height={80}
                            quality={100}
                        />
                        <StaticImage                        
                            alt="connector-3"
                            src="../../../../images/lp-product/connector-3.png"
                            width={80}
                            height={80}
                            quality={100}
                        />
                    </ContainerIcons>
                    <Title>TAKE A TOUR</Title>
                    <Description>Learn more about how estuary can help with real-time replication.</Description>
                    <ContainerButton>
                        <ActionLink target="_blank" to="/why">
                            Self-Guided Tour [1 min]
                        </ActionLink>
                        <Button target="_blank" href="https://try.estuary.dev/webinar-estuary101-ondemand">
                            Product Overview [30 min]
                        </Button>
                    </ContainerButton>
                </ContainerContent>
            </Container>
        </Wrapper>
    )
}

export default TakeATour