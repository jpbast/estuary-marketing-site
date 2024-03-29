import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 40px;
  flex: 1;
  padding: 32px 0px;

  h3 {
    font-size: 1.2rem;
    color: #04192b;
    font-weight: 600;
    margin: 0;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  .next-steps {
    max-width: 490px;
    width: 100%;

    ul {
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 20px;

      @media (max-width: 900px) {
        gap: 10px;
      }

      li {
        list-style: none;
        margin: 0;
        color: #5072eb;
        font-size: 1rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 10px;

        svg {
          font-size: 30px;
        }
      }
    }
  }

  .about-the-author {
    flex: 1;
    flex: wrap;

    .author-info {
      flex-wrap: wrap;
      display: flex;
      flex: 1;
      gap: 14px;
      align-items: center;
      row-gap: 10px;
    }
    /* 
    & > div {
      
    } */

    .author-description {
      font-size: 1rem;
      font-weight: 400;
      color: #47506d;
      line-height: 1.8;
      margin-top: -20px;
      margin-bottom: 0;

      @media (max-width: 900px) {
        margin-top: 0;
      }
    }

    .photo-section {
      display: flex;
      align-items: center;
      flex-shrink: 0;

      .photo-container {
        width: 68px;
        height: 68px;
        border: 2px solid #5072eb;
        padding: 6px;
        border-radius: 100%;
        flex-shrink: 0;

        .img {
          border-radius: 100%;
          width: 100%;
        }
      }

      .author-name {
        font-size: 1.1rem;
        font-weight: 600;
        color: #47506d;
        margin: 0 0 0 14px;
        position: relative;
      }
    }
  }

  .social-link {
    svg {
      font-size: 30px;
      /* width: 30px; */
    }
  }

  .divider {
    width: 1px;
    height: 57px;
    background-color: #d7dce5;
  }

  @media (max-width: 1284px) {
    padding: 0;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 40px;

    & > div {
      gap: 20px;
    }
  }
`;
