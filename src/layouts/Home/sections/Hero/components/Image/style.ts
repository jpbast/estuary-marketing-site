import styled, { css } from "styled-components"

export const Container = styled.div`
    display: none;

    @media (min-width: 1280px) {
        display: flex;
        flex: 1 1 auto;
        justify-content: flex-end;
        max-width: 35vw;
        min-width: 20rem;
    }
`