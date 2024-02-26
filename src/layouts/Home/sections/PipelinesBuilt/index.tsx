import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { Wrapper, Container, ContainerContent, ContainerImage, ContainerIcons, Title, Description, ContainerButton, Button } from "./style"

const PipelinesBiult = () => {
    return (
        <Wrapper>
            <Container>
                <ContainerImage>
                    <StaticImage                    
                        alt="Laptop"
                        src="../../../../images/home/laptop.png"
                        layout="constrained"
                    />
                </ContainerImage>
                <ContainerContent>
                    <ContainerIcons>
                        <StaticImage
                            alt="Connection-1"
                            src="../../../../images/home/connector-01.png"
                            width={90}
                            height={90}
                            quality={100}
                        />
                    </ContainerIcons>
                    <Title>PIPELINES BIULT<span> IN MINUTS</span></Title>
                    <Description>Use the UI to quickly build end-to-end pipelines or use the CLI to automate and version-control as part of data ops</Description>
                    <ContainerButton>
                        <Button target="_blank" href="https://try.estuary.dev/webinar-estuary101-ondemand">
                            View Demo
                        </Button>
                    </ContainerButton>
                </ContainerContent>
            </Container>
        </Wrapper>
    )
}

export default PipelinesBiult