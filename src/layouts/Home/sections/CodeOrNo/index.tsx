import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { Wrapper, Container, ContainerContent, ContainerImage, ContainerIcons, Title, Description, ContainerButton, Button } from "./style"

const CodeOrNo = () => {
    return (
        <Wrapper>
            <Container>
                <ContainerImage>
                    <StaticImage                    
                        alt="Laptop"
                        src="../../../../images/home/Frame.png"
                        layout="constrained"
                    />
                </ContainerImage>
                <ContainerContent>
                    <ContainerIcons>
                        <StaticImage
                            alt="Connection-1"
                            src="../../../../images/home/connector.png"
                            width={90}
                            height={90}
                            quality={100}
                        />
                    </ContainerIcons>
                    <Title>CODE OR<span> NO-CODE</span></Title>
                    <Description>Use the UI to quickly build end-to-end pipelines or use the CLI to automate and version-control as part of data ops</Description>
                    <ContainerButton>
                        <Button target="_blank" to="https://try.estuary.dev/webinar-estuary101-ondemand">
                            View Connector
                        </Button>
                    </ContainerButton>
                </ContainerContent>
            </Container>
        </Wrapper>
    )
}

export default CodeOrNo