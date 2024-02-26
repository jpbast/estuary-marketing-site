import styled from "styled-components"

export const Container: any = styled.div`
    display: flex;
    flex-direction: ${({ $reverse }: any) => ($reverse ? "row-reverse" : "row")};
    gap: 16px;
    align-items: center;
    border: 1px solid #D7DCE5;
    background-color: #F9FAFC;
    border-radius: 100px;
    padding: ${({ $reverse }: any) => ($reverse ? "20px 20px 20px 40px" : "20px 40px 20px 20px")};

    @media (min-width: 1024px) {
        flex-direction: row-reverse;
        padding: 20px 40px 20px 40px;
        max-width: ${({ $reverseDesktop } : any) => ($reverseDesktop ? "377px" : "439px")};
    }
`

export const ContainerImage = styled.div`
    position: relative;
    width: 63px;

    @media (min-width: 1024px) {
        width: 80px;
    }

    @media (min-width: 1280px) {
        width: 246px;

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
    font-size: 20px;
    color: #5072EB;
    margin: 0;

    @media (min-width: 1280px) {
        font-size: 20px;
        line-height: 24px;
    }
`

export const Description = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    color: #47506D;
    margin: 0;
    
    @media (min-width: 1280px) {
        font-size: 16px;
    }
`