import StickyBox from 'react-sticky-box';
import { styled } from 'styled-components';

export const PostSectionContainer = styled.div`
  display: flex;
  align-items: start;
  gap: 36px;

  @media (max-width: 767px) {
    flex-direction: column;
  }

  .dynamic-html {
    width: 100%;
    overflow: hidden;
    padding-bottom: 220px;

    @media (max-width: 767px) {
      padding-bottom: 0;
    }

    p,
    li {
      font-size: 1.3rem !important;
      color: #47506d !important;

      @media (max-width: 800px) {
        line-height: 1.4;
      }

      span {
        font-size: 1.3rem !important;
        color: #47506d !important;

        @media (max-width: 800px) {
          line-height: 1.4;
        }
      }
    }

    h2 {
      color: #04192b;
      font-size: 2.3rem;
      font-style: normal;
      font-weight: 600;
      line-height: 48px;

      span {
        color: #04192b;
        font-size: 2.3rem;
        font-style: normal;
        font-weight: 600;
        line-height: 48px;
      }
    }

    h3 {
      color: #47506d;
      font-weight: 600;
      font-size: 1.5rem;

      span {
        color: #47506d;
        font-weight: 600;
        font-size: 1.5rem;
      }
    }

    h4 {
      font-weight: 500;
      font-size: 1.3rem;

      span {
        font-weight: 500;
        font-size: 1.3rem;
      }
    }

    /* Remove padding and margin top from the first element in the post so everything keeps aligned at the top */
    :first-child {
      padding-top: 0px;
      margin-top: 0px;
    }

    :last-child {
      padding-bottom: 0px;
      margin-bottom: 0px;
    }
  }
`;

export const StickyContent = styled(StickyBox)`
  min-width: 250px;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media (max-width: 767px) {
    position: static !important;
    flex-direction: column;
    min-width: 0px;
    max-width: unset;
    width: 100%;
  }
`;

export const BuildPipelineSticky = styled.div`
  width: 250px;
  border-radius: 24px;
  background-color: #f9fafc;
  border: 1px solid #e8ecfa;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  p {
    font-size: 1.2rem;
    color: #04192b;
    font-weight: 500 !important;
    margin: 0;
    text-align: center;
    line-height: 1.2;

    span {
      color: #5072eb;
    }
  }

  a {
    background-color: #5072eb;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 52px;
    color: white;
    font-size: 1rem;
    outline: none;
    border: none;
  }
`;

export const PipelineContainer = styled.div`
  margin-top: -220px;
  padding: 40px 286px 0px 286px; /* 286px is equal to 250px sticky side content + 36px gap */

  @media (max-width: 1128px) {
    padding: 40px 0px 0px 286px;
  }

  @media (max-width: 767px) {
    margin-top: 0;
    padding: 40px 0px 0px 0px;
  }
`;
