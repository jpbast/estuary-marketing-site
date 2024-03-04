import styled from "styled-components"

export const Container: any = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
    border: 1px solid #D7DCE5;
    background-color: #F9FAFC;
    border-radius: 100px;
    padding: 20px 40px 20px 20px;

    @media (min-width: 1024px) {
        flex-direction: row;
        padding: 10px 16px;
        max-width: 320px;
    }
`

export const ContainerImage = styled.div`
    position: relative;
    width: 54px;

    @media (min-width: 1024px) {
        width: 54px;
    }
`

export const ContainerContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 12px;
`

export const Title = styled.p`
    font-weight: 700;
    font-size: 16px;
    color: #5072EB;
    margin: 0;

    @media (min-width: 1280px) {
        font-size: 14px;
        line-height: 18px;
    }
`

export const Description = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    color: #47506D;
    margin: 0;
    
    @media (min-width: 1280px) {
        font-size: 12px;
        line-height: 26px;
    }
`