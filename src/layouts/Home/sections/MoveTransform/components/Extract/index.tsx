import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { Container, ContainerExtract, Content } from "./style"

const Extract = () => {
    return (
        <Container>
            <ContainerExtract>
                <Content>
                    <StaticImage                    
                        alt="Extract-01"
                        src="../../../../../../images/home/extract-01.png"
                        layout="constrained"
                        width={567}
                        height={149}
                        quality={100}
                    />
                </Content>
                <Content $reverseDesktop>
                    <StaticImage                    
                        alt="Extract-01"
                        src="../../../../../../images/home/extract-02.png"
                        layout="constrained"
                        width={567}
                        height={149}
                        quality={100}
                    />
                </Content>
                <Content>
                    <StaticImage                    
                        alt="Extract-01"
                        src="../../../../../../images/home/extract-03.png"
                        layout="constrained"
                        width={567}
                        height={149}
                        quality={100}
                    />
                </Content>
            </ContainerExtract>
        </Container>
        )
    };

export default Extract