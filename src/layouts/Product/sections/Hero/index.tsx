import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Accordion from "./components/Accordion";
import Cards from "./components/Cards";

import { Container, ContainerHeader, ContainerImage, Title, ContainerButton, Button, Description, ContainerContent } from "./style"

const ProductHero = () => {
    return (
        <Container>
            <ContainerHeader>
                <ContainerImage>
                    <StaticImage
                        placeholder="none"
                        src="../../../../images/lp-product/hero.png"
                        alt="Hero"
                        layout="constrained"
                    />
                </ContainerImage>
                <ContainerContent>
                    <Title>STREAMING OR BATCH, <span>FROM ONE PLATAFORM</span></Title>
                    <Description>
                        Capture and stream your database and API events into your apps, warehouse, and AI without managing any infra. Choose from hundreds of both batch and streaming connectors while maintaining full control of your data.
                    </Description>
                    <ContainerButton>
                        <Button target="_blank" href="https://dashboard.estuary.dev/register">Build a Pipeline</Button>
                        <Button target="_blank" href="https://dashboard.estuary.dev/register" $secondary>View Pricing</Button>
                    </ContainerButton>
                    <Accordion
                        title="What is Real-time ETL & CDC?"
                        text="Real-time ETL provides all the convenience of using connectors and a managed platform to move data, but with Millisecond refreshes in your data warehouse, databases, SaaS apps, vector DBs, etc. No need to wait for hourly/daily updates to derive business value from data. ETL means that you can choose your mode of operation.  Simple ELT for analytics or powerful transformations for real-time data products."
                    />
                    <Accordion
                        title="How is Estuary Different?"
                        text="Real-time ETL provides all the convenience of using connectors and a managed platform to move data, but with Millisecond refreshes in your data warehouse, databases, SaaS apps, vector DBs, etc. No need to wait for hourly/daily updates to derive business value from data. ETL means that you can choose your mode of operation.  Simple ELT for analytics or powerful transformations for real-time data products."
                    />
                    <Accordion
                        title="Who shouldn’t use Estuary?"
                        text="Real-time ETL provides all the convenience of using connectors and a managed platform to move data, but with Millisecond refreshes in your data warehouse, databases, SaaS apps, vector DBs, etc. No need to wait for hourly/daily updates to derive business value from data. ETL means that you can choose your mode of operation.  Simple ELT for analytics or powerful transformations for real-time data products."
                        $last
                    />
                </ContainerContent>
            </ContainerHeader>
            <Cards />
        </Container>
    )
};

export default ProductHero
