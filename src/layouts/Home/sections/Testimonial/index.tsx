import React from "react"
import Testimonials from "./components/Testimonial"

import { Wrapper, Container } from "./style"

const Testimonial = () => {
    return (
        <Wrapper>
            <Container>
                <Testimonials />
            </Container>
        </Wrapper>
    )
}

export default Testimonial