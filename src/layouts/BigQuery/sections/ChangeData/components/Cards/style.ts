import styled from "styled-components"

import Vector from "../../../../../../images/lp-big-query/change-data/background.png"

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 219px;
    margin: 0 auto;
    max-width: 450px;
    flex: 1;

    background-image: url(${Vector});
    background-position: center 67%;
    background-size: 80%;
    background-repeat: no-repeat;

    @media (min-width: 1280px){
        background-size: 50%;
    }

    @media (min-width: 1024px) {
        max-width: 100%;
        flex-direction: column;
        gap: 100px;

        > div:first-of-type {
            align-items: end;

            > div:nth-child(2) {
                margin-right: 60px;
            }
        }

        > div:last-of-type {
            align-items: start;

            > div:nth-child(2) {
                margin-left: 60px;
            }
        }
    }

    @media (min-width: 1280px) {
        gap: 120px;

        > div:first-of-type {
            align-items: end;

            > div:nth-child(2) {
                margin-right: 120px;
            }
        }

        > div:last-of-type {
            align-items: start;

            > div:nth-child(2) {
                margin-left: 120px;
            }
        }
    }

    @media (min-width: 1400px) {
        gap: 158px;

        > div:first-of-type {
            align-items: end;
        }

        > div:last-of-type {
            align-items: start;

            > div:nth-child(2) {
                margin-left: 53px;
                margin-top: 52px;
            }
            
        }
    }
`

export const ContainerCards :any = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;

    @media (min-width: 1024px) {
        display: flex;
        flex-direction: ${({ $reverseDesktop }: any) => ($reverseDesktop ? "column" : "row")};
        justify-content: space-around;
    }
`
