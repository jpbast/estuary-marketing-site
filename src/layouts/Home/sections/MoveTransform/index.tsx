import React from "react"

import Extract from "./components/Extract"
import Cards from "./components/Cards"

import { Container, ContainerContent, LineBreak, Title, Description } from "./style"

const MoveTransform = () => {
    return (
        <Container>
            <ContainerContent>
                <Title><span>MOVE</span> AND <span>TRANSFORM YOUR DATA</span> FROM WHERE IT IS TO <LineBreak />WHERE YOU WANT IT IN <span>MILLISECONDS</span>, AUTOMATICALLY.</Title>
                <Description>Capture from Clouds, Databases and SaaS apps, create real-time transformations and materialized <LineBreak />views, for a consistent, exact copy of your data powering both analytics and operations.</Description>
            </ContainerContent>
            <Extract />
            <Cards />
        </Container>
    )
}

export default MoveTransform