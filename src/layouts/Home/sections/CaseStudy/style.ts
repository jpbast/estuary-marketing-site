import styled from "styled-components"

import { Link } from "gatsby"

import VectorImage from "../../../../images/lp-product/Vector.png"

export const Wrapper = styled.div`
    padding: 90px 100px;

`

export const Container = styled.div`
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    border-radius: 24px;
    background-image: url(${VectorImage});
    background-size: cover;
    background-position: top right;
    background-repeat: no-repeat;
    background-color: #04192B;

    @media (min-width: 1024px) {
        flex-direction: row-reverse;
        align-items: center;
    }

    @media (min-width: 1280px) {
        max-width: 1740px;
        padding: 32px 60px;
        margin: 0 auto;
    }
`

export const ContainerImage = styled.div`
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

export const ContainerContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex: 1;
`

export const ContainerIcons = styled.div`
    display: none;

    @media (min-width: 1280px) {
        display: flex;
        gap: 60px;
    }
`

export const Title = styled.p`
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
    margin: 0;
    color: #5072EB;

    @media (min-width: 1280px) {
        font-size: 40px;
        line-height: 72px;
    }
`

export const SubTitle = styled.p`
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
    margin: 0;
    color: #fff;

    span {
        font-weight: 400;
    }

    @media (min-width: 1280px) {
        font-size: 72px;
        line-height: 86px;
    }
`

export const Description = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    margin: 0;
    color: #fff;

    @media (min-width: 1280px) {
        font-size: 20px;
    }
`

export const ContainerButton = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (min-width: 1280px) {
        gap: 24px;
        flex-direction: row;
        margin-top: 20px;
    }
`

export const Button = styled(Link)`
    width: 100%;
    font-weight: 500;
    text-align: center;
    border-radius: 4px;
    padding: 12px 24px;
    border: 2px solid #625eff;
    background-color: transparent;
    color: #fff;

    @media (min-width: 1280px) {
        width: 185px;
        padding: 12px 62px;
        font-size: 16px;
    }
`
