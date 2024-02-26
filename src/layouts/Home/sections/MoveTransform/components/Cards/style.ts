import styled from "styled-components"

import BackgroundImage from "../../../../../../images/home/move-transform-bg.png"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 250px;
    max-width: 450px;
    flex: 1;
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;

    @media (min-width: 1024px) {
        max-width: 100%;
        flex-direction: row;
        background-size: 466px 466px;
        gap: 150px;

        > div:first-of-type {
            align-items: end;

            > div:nth-child(2) {
                margin-right: 100px;
            }

            > div:nth-child(3) {
                margin-right: 100px;
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
        gap: 250px;

        > div:first-of-type {
            align-items: end;

            > div:nth-child(2) {
                margin-right: 60px;
            }

            > div:nth-child(3) {
                margin-right: 60px;
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
        background-size: 466px 466px;
        gap: 450px;

        > div:first-of-type {
            align-items: end;

            > div:nth-child(2) {
                margin-right: 100px;
            }

            > div:nth-child(3) {
                margin-right: 100px;
            }
        }

        > div:last-of-type {
            align-items: start;

            > div:nth-child(2) {
                margin-left: 120px;
            }
        }
    }
`

export const ContainerCards = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 640px;
    flex: 1;

    @media (min-width: 1024px) {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
`
