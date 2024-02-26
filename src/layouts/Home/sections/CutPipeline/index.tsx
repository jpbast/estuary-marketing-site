import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { Wrapper, Container, ContainerContent, ContainerImage, ContainerIcons, Title, Description, ContainerButton, Button } from "./style"

const CutPipelines = () => {
    return (
        <Wrapper>
            <Container>
                <ContainerImage>
                    <StaticImage                    
                        alt="Laptop"
                        src="../../../../images/home/pricing-calculator.png"
                        layout="constrained"
                    />
                </ContainerImage>
                <ContainerContent>
                    <ContainerIcons>
                        <StaticImage
                            alt="Connection-1"
                            src="../../../../images/home/connector-02.png"
                            width={90}
                            height={90}
                            quality={100}
                        />
                    </ContainerIcons>
                    <Title>CUT PIPELINE COSTS<span> BY 2-5X</span></Title>
                    <Description>Estuary customers save up to 5x on their pipeline costs and increase by productivity by 4x</Description>
                    <ContainerButton>
                        <Button target="_blank" to="https://try.estuary.dev/webinar-estuary101-ondemand">
                            Calculate your savings
                        </Button>
                    </ContainerButton>
                </ContainerContent>
            </Container>
        </Wrapper>
    )
}

export default CutPipelines