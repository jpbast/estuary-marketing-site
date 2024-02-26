import React from "react"

import { Wrapper, Container, ContainerContent, Title, SubTitle, Description, ContainerButton, Button } from "./style"

const CaseStudy = () => {
    return (
        <Wrapper>
            <Container>
                <ContainerContent>
                    <Title>CASE STUDY</Title>
                    <SubTitle>CONNECT&<span>GO</span></SubTitle>
                    <Description>Connect&GO lowers MySQL to Snowflake latency up to 180x, improves productivity 4x with Estuary. </Description>
                    <ContainerButton>
                        <Button target="_blank" to="https://try.estuary.dev/webinar-estuary101-ondemand">
                            Read
                        </Button>
                    </ContainerButton>
                </ContainerContent>
            </Container>
        </Wrapper>
    )
}

export default CaseStudy