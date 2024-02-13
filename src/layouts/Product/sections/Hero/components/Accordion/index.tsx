import React, { useState } from "react"

import { Container, Title, Button, ContainerDescription, Description, IconPlus, IconMinus } from "./style"

const Item = ({ title, children, index, selected, setOpen, ...props }) => {
    const open = index === selected
    const Icon = open ? IconMinus : IconPlus

    return (
        <Container>
            <Button onClick={() => setOpen(open ? 0 : index)} {...props}>
                <Icon />
                <Title>{title}</Title>
            </Button>
            <ContainerDescription open={open}>
                {children}
            </ContainerDescription>
        </Container>
    )
}

const Accordion: any = () => {
    const [selected, setSelected] = useState(0)

    return (
        <>
            <Item title="What is Real-time ETL & CDC?" index={1} selected={selected} setOpen={setSelected}>
                <Description>Real-time ETL provides all the convenience of using connectors and a managed platform to move data, but with Millisecond refreshes in your data warehouse, databases, SaaS apps, vector DBs, etc. No need to wait for hourly/daily updates to derive business value from data.</Description>
                <Description>ETL means that you can choose your mode of operation.  Simple ELT for analytics or powerful transformations for real-time data products.</Description>
            </Item>
            <Item title="How is Estuary Different?" index={2} selected={selected} setOpen={setSelected}>
                <Description>Real-time ETL provides all the convenience of using connectors and a managed platform to move data, but with Millisecond refreshes in your data warehouse, databases, SaaS apps, vector DBs, etc. No need to wait for hourly/daily updates to derive business value from data.</Description>
                <Description>Real-time ETL provides all the convenience of using connectors and a managed platform to move data, but with Millisecond refreshes in your data warehouse, databases, SaaS apps, vector DBs, etc. No need to wait for hourly/daily updates to derive business value from data.</Description>
            </Item>
            <Item title="Who shouldn’t use Estuary?" index={3} selected={selected} setOpen={setSelected}>
                <Description>Real-time ETL provides all the convenience of using connectors and a managed platform to move data, but with Millisecond refreshes in your data warehouse, databases, SaaS apps, vector DBs, etc. No need to wait for hourly/daily updates to derive business value from data.</Description>
                <Description>ETL means that you can choose your mode of operation.  Simple ELT for analytics or powerful transformations for real-time data products.</Description>
            </Item>
        </>
    )
}

export default Accordion