import styled from "styled-components"
import { Link } from "gatsby"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export const LineBreak = styled.div`
    @media (min-width: 1024px) {
        display: block;
    }
`

export const Title = styled.h1`
    font-weight: 500;
    font-size: 36px;
    line-height: 43px;
    color: #ffffff;
    margin: 0;

    @media (min-width: 1280px) {
        font-size: 52px;
        line-height: 72px;
    }

    @media (min-width: 1550px) {
        font-size: 72px;
        line-height: 86px;
    }
`

export const Description = styled.p`
    font-weight: 400;
    font-size: 16px;
    color: #b7c6dd;
    line-height: 22px;
    margin: 0;
    
    @media (min-width: 1280px) {
        font-size: 20px;
        line-height: 30px;
    }
`

export const ContainerButton = styled.div`
    display: flex;
    gap: 15px;
    flex-direction: column;

    @media (min-width: 600px) {
        flex-direction: row;
    }
`

export const Button = styled(Link)`
    width: 100%;
    text-align: center;
    border-radius: 4px;
    padding: 12px 16px;
    border: 2px solid #5072EB;
    background-color: #5072EB;
    font-size: 16px;
    font-weight: 500;
    color: #FFF;

    @media (min-width: 1024px) {
        width: fit-content;
        padding: 8px 24px;
        font-size: 16px;
    }
`

export const ActionLink : any = styled(Link)`
    width: 100%;
    text-align: center;
    border-radius: 4px;
    padding: 12px 16px;
    border: 2px solid #5072EB;
    background-color: transparent;
    font-size: 16px;
    font-weight: 500;
    color: #FFF;

    @media (min-width: 1024px) {
        width: fit-content;
        padding: 8px 24px;
        font-size: 16px;
    }
`