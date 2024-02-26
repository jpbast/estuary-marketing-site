import React from "react"
import LogoSlider from "./components/LogoSlider";
import Content from "./components/Content"
import Image from "./components/Image";

import { Wrapper, Container, ContainerHeader } from "./style"

const Hero = () => {
    return (
        <Wrapper>
            <Container>
                <ContainerHeader>
                    <Content />
                    <Image />
                </ContainerHeader>
                <LogoSlider />
            </Container>
        </Wrapper>
    )
};

export default Hero
