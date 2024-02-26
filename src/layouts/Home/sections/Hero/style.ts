import styled from "styled-components"
import { Link } from "gatsby"

export const Wrapper = styled.div`
    background-color: #04192b;
`

export const Container = styled.div`
    padding: 40px 20px;

    @media (min-width: 1280px) {
        display: flex;
        flex-direction: column;
        max-width: 1920px;
        margin: 0 auto;
        padding: 80px 90px;
        padding-top: 20px;
    }
`

export const ContainerHeader = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 24px;
`

export const ContainerContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    max-width: 670px;
    margin-top: 40px;

    @media (min-width: 1280px) {
        margin-top: 24px;
        justify-content: center;
    }
`

export const Title = styled.h1`
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
    margin: 0;

    span {
        color: #5072EB;
    }

    @media (min-width: 1280px) {
        font-size: 52px;
        line-height: 72px;

        span {
            display: block;
        }
    }

    @media (min-width: 1550px) {
        font-size: 60px;
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
    margin-top: 60px;

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
