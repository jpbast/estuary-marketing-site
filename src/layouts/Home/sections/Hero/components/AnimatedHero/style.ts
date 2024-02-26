import styled, { css } from "styled-components"

export const Image = styled.div`
    width: 100%;

        &> :first-child {
            overflow: visible;
            max-height: 80vh;
            width: 100%;
            height: 100%;
        }

        &> :not(:first-child) {
            display: none;
}

`