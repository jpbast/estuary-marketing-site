import { styled } from 'styled-components';

export const Container = styled.div`
  background-color: var(--background-color-primary);
  padding: 48px;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  position: relative;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 20px;

    p {
      text-align: center;
    }

    a {
      /* max-width: 0px; */
      width: 100%;
    }
  }

  .img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
  }

  p {
    margin: 0px;
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    line-height: 1.2;

    span {
      color: #5072eb;
    }
  }
`;
