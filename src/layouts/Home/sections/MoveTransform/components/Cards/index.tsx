import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Card from "../Card"

import { Container, ContainerCards } from "./style"

const TheAutomationCards = () => {
    return (
        <Container>
            <ContainerCards>
                <Card title="CDC:" $reverse>
                    <StaticImage
                        alt="icon-1"
                        src="../../../../../../images/home/card-01.png"
                        layout="constrained"
                    />
                </Card>
                <Card title="File Stores:" $reverse>
                    <StaticImage
                        alt="icon-2"
                        src="../../../../../../images/home/card-02.png"
                        layout="constrained"
                    />
                </Card>
                <Card title="File Stores:" $reverse>
                    <StaticImage
                        alt="icon-2"
                        src="../../../../../../images/home/card-03.png"
                        layout="constrained"
                    />
                </Card>
                <Card title="Streaming Storage:" $reverse>
                    <StaticImage
                        alt="Streams:"
                        src="../../../../../../images/home/card-04.png"
                        layout="constrained"
                    />
                </Card>
            </ContainerCards>
            <ContainerCards>
                <Card title="Analytics:" $reverse $reverseDesktop>
                    <StaticImage
                        alt="icon-4"
                        src="../../../../../../images/home/card-05.png"
                        layout="constrained"
                    />
                </Card>
                <Card title="Operations:" $reverse $reverseDesktop>
                    <StaticImage
                        alt="icon-5"
                        src="../../../../../../images/home/card-06.png"
                        layout="constrained"
                    />
                </Card>
                <Card title="Artificial Inteligence:" $reverse $reverseDesktop>
                    <StaticImage
                        alt="icon-6"
                        src="../../../../../../images/home/card-07.png"
                        layout="constrained"
                    />
                </Card>
            </ContainerCards>
        </Container>
    )
};

export default TheAutomationCards