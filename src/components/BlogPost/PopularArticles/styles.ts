import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;

  & > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;

    @media (max-width: 850px) {
      grid-template-columns: repeat(2, minmax(200px, 1fr));
      flex-wrap: wrap;
    }

    @media (max-width: 600px) {
      grid-template-columns: repeat(1, minmax(200px, 1fr));
      flex-wrap: wrap;
    }
  }

  p,
  h3 {
    margin: 0;
  }

  & > h3 {
    color: #47506d;
    text-align: center;
    font-weight: 700;
    font-size: 2.2rem;
  }
`;

export const ArticleCardContainer = styled.div`
  background-color: transparent;
  border-radius: 16px;
  border: 1px solid #d7dce5;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;

  h3 {
    color: #47506d;
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.4;
    margin-top: auto;
  }

  .thumbnail {
    border-radius: 8px;
    object-fit: cover;
  }

  .tags-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 10px;
    flex-wrap: wrap;
    flex: 1;

    @media (max-width: 420px) {
      gap: 6px;
    }

    & > p {
      flex: 1;
      font-weight: 600;
      font-size: 1rem;
      color: #625eff;
      line-height: 1.3;
      min-width: 200px;
    }

    .date-container {
      display: flex;
      gap: 16px;

      p {
        font-size: 0.8rem;
        font-weight: 400;
        color: #878ea6;
        position: relative;

        &:first-of-type::after {
          content: '';
          position: absolute;
          right: -10px;
          width: 4px;
          height: 4px;
          background-color: #878ea6;
          border-radius: 100%;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }

  .bio {
    margin-top: auto;
  }

  & > div:last-of-type {
    display: flex;
    justify-content: space-between;
    margin-top: auto;

    @media (max-width: 850px) {
      display: none;
    }

    div {
      border-radius: 36px;
      padding: 4px 16px;
      background-color: #f2f3f5;
      color: #47506d;
      font-weight: 500;
      font-size: 0.9rem;
    }

    svg {
      color: #5072eb;
      font-size: 28px;
    }
  }
`;
