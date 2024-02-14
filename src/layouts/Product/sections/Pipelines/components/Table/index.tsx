import React from "react"

import { Container, Table, Head, Body, LineHead, LineBody, Checkmark, Close } from "./style"

const PipelinesTable = () => {
    return (
        <Container>
            <Table>
                <Head>
                    <LineHead></LineHead>
                    <LineHead>Estuary</LineHead>
                    <LineHead>Batch ELT/ETL</LineHead>
                    <LineHead>DIY Python</LineHead>
                    <LineHead>KAFKA</LineHead>
                </Head>
                <Body>
                    <LineBody><span>Price</span></LineBody>
                    <LineBody><span>$</span></LineBody>
                    <LineBody><span>$$$</span></LineBody>
                    <LineBody><span>$-$$$$</span></LineBody>
                    <LineBody><span>$-$$$$</span></LineBody>
                </Body>
                <Body>
                    <LineBody><span>Speed</span></LineBody>
                    <LineBody>&#60;100ms</LineBody>
                    <LineBody>5min+</LineBody>
                    <LineBody>Varies</LineBody>
                    <LineBody>&#60;100ms</LineBody>
                </Body>
                <Body>
                    <LineBody><span>Ease</span></LineBody>
                    <LineBody>Analysts can manage</LineBody>
                    <LineBody>Analysts can manage</LineBody>
                    <LineBody>Data Engineer</LineBody>
                    <LineBody>Senior Data Engineer</LineBody>
                </Body>
                <Body>
                    <LineBody><span>Power</span></LineBody>
                    <LineBody><Checkmark /></LineBody>
                    <LineBody><Close /></LineBody>
                    <LineBody><Close /></LineBody>
                    <LineBody><Checkmark /></LineBody>
                </Body>
            </Table>
        </Container>
    )
}

export default PipelinesTable