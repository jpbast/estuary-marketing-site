import React from "react"

import { LineBreak, Button, Title, Description, ActionLink, ContainerButton, Container } from "./style"

const Content = () => {
    return (
        <Container>
            <Title>
                Real-time ETL & CDC, <LineBreak />up in minutes.
            </Title>
            <Description>
                Connect and transform streaming and batch data with custom <LineBreak />no-code connectors, SQL, and Typescript from within your cloud storage.
            </Description>
            <ContainerButton>
                <Button target="_blank" to="https://dashboard.estuary.dev/register">Build a Pipeline</Button>
                <ActionLink>Contact Us</ActionLink>
            </ContainerButton>
        </Container>
    )
};

export default Content