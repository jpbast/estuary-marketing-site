import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 48px 64px;
  border-radius: 24px;
  background-color: var(--background-color-primary);
  position: relative;

  @media (max-width: 720px) {
    padding: 32px;
  }

  .mobile {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: auto;
    flex: 1;

    .links {
      display: flex;
      flex-direction: row;
      gap: 24px;

      @media (max-width: 500px) {
        display: flex;
        flex-direction: column;
        gap: 24px;
        height: 128px;
      }

      a {
        flex: 1;
        max-width: none;
        min-width: 180px;

        @media (max-width: 500px) {
          min-width: 0px;
        }
      }
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

  h3 {
    color: white;
    font-weight: 600;
    font-size: 3rem;
    font-family: 'Inter' !important;
    margin: 0;
  }

  .first-section {
    display: flex;
    flex-direction: column;
    gap: 40px;

    .links {
      display: flex;
      gap: 24px;
    }
  }

  .items {
    ul {
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 30px;

      li {
        margin: 0;
        list-style: none;

        p {
          color: white;
          font-weight: 500;
          font-size: 1.5rem;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 10px;

          svg {
            font-size: 30px;
            color: #5072eb;
          }
        }
      }
    }
  }

  @media (max-width: 600px) {
    h3 {
      font-size: 1.5rem !important;
    }

    p {
      font-size: 1rem !important;
    }
  }
`;
