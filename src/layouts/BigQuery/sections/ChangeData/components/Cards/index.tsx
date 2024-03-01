import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Card from "../Card"

import { Container, ContainerCards } from "./style"

const TheAutomationCards = ({ $reverseDesktop = false }) => {
    return (
        <Container>
            <ContainerCards>
                <Card title="REAL-TIME INGESTION" description="Capture and relay every  insert, update, and delete in milliseconds." $reverseDesktop>
                    <StaticImage
                        alt="icon-1"
                        src="../../../../../../images/BigQuery/ChangeData/icon-01.png"
                        layout="constrained"
                    />
                </Card>
            </ContainerCards>
            <ContainerCards $reverseDesktop={$reverseDesktop}>
                <Card title="HIGH THROUGHPUT" description="Distributed event-driven architecture enable boundless scaling with exactly-once semantics" $reverse $reverseDesktop>
                    <StaticImage
                        alt="icon-2"
                        src="../../../../../../images/BigQuery/ChangeData/icon-02.png"
                        layout="constrained"
                    />
                </Card>
                <Card title="DURABLE REPLICATION" description="Cloud storage backed CDC w/ heart beats ensures reliability, even if your destination is down." $reverse $reverseDesktop>
                    <StaticImage
                        alt="icon-3"
                        src="../../../../../../images/BigQuery/ChangeData/icon-03.png"
                        layout="constrained"
                    />
                </Card>
            </ContainerCards>
        </Container>
    )
};

export default TheAutomationCards