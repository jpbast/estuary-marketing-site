import { styled } from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export const CardList = styled.div`
  margin-top: 20px;
  display: flex;
  grid-template-columns: repeat(3, minmax(0, 400px));
  justify-content: center;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, minmax(0, 400px));
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, minmax(0, 400px));
  }
`
