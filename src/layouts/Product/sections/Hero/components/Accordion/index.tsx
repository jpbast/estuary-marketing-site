import React, { useState } from "react"

import { Container, Title, Button, ContainerDescription, Description, IconPlus, IconMinus } from "./style"

const Accordion: any = ({ title, text, ...props }) => {
    const [open, setOpen] = useState(false)

    const Icon = open ? IconMinus : IconPlus

    return (
        <Container>
            <Button onClick={() => setOpen(!open)} {...props}>
                <Icon />
                <Title>{title}</Title>
            </Button>
            <ContainerDescription open={open}>
                <Description>{text}</Description>
            </ContainerDescription>
        </Container>
    )
}

export default Accordion