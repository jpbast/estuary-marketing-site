import styled from "styled-components"

export const Container = styled.div`
    position: relative;
    flex: 1;
    max-width: 335px;
    margin: 0 auto;
    margin-bottom: 40px;

    @media (min-width: 1024px) {
        max-width: 100%;

        > div {
            margin-left: 60px;
        }
    }
`

export const ContainerExtract = styled.div`


    @media (min-width: 1280px) {
        display: flex;
        gap: 60px;
    }
`

export const Content : any = styled.div`
    padding-top: 20px;

    @media (min-width: 1280px) {
        padding-top: ${({ $reverseDesktop } : any) => ($reverseDesktop ? "66px" : "0")};
    }
`