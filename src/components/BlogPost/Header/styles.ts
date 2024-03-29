import { styled } from 'styled-components';

export const Container = styled.header`
  background-color: #f9fafc;
  width: 100%;
  position: relative;
  padding: 32px 64px;

  @media (max-width: 1284px) {
    padding: 32px 20px;
  }

  .img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .header-content-wrapper {
    max-width: var(--max-width-blog-page);
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 40px;

    @media (max-width: 1150px) {
      flex-direction: column;
      gap: 24px;
    }
  }

  .header-info {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    h1 {
      margin: 0;
      padding: 0;
      color: #47506d;
      font-size: 3.5rem;
      font-style: normal;
      font-weight: 600;
      line-height: 1.2;
      text-transform: uppercase;

      @media (max-width: 1400px) {
        font-size: 2.7rem;
      }

      @media (max-width: 1024px) {
        font-size: 2.2rem;
        line-height: 42px;
      }
    }

    .published-at-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 30px;
      flex-wrap: wrap;
    }

    .tags-container {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      flex: 1;

      .tag {
        background-color: #e9edfa;
        border-radius: 36px;
        padding: 4px 16px;

        span {
          font-size: 1rem;
          font-weight: 500;
          color: #5072eb;
        }
      }
    }

    .post-description {
      color: #47506d;
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 30px;
      font-family: 'Inter', sans-serif;
      margin: 0;
      padding: 0;
    }
  }

  .hero-image {
    max-width: 480px;
    width: 100%;

    @media (max-width: 1150px) {
      max-width: 600px;
      flex-direction: column;
      gap: 24px;
    }

    img {
      border-radius: 24px;
      aspect-ratio: 3 / 2;
      object-fit: cover;
    }

    @media (max-width: 767px) {
      max-width: 100%;
    }
  }

  .blog-post-date {
    display: flex;
    align-items: center;
    gap: 8px;

    span {
      color: #47506d;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
    }

    svg {
      margin-bottom: 2px;
    }
  }
`;
