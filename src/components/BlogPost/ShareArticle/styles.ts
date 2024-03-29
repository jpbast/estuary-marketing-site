import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  h3 {
    color: var(--background-color-primary) !important;
    font-size: 1.2rem;
    font-weight: 600 !important;
    margin: 0;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 0;

    li {
      margin: 0;
      list-style: none;

      a {
        button {
          width: 40px;
          height: 40px;
          border-radius: 100%;
          border: 1px solid #d7dce5 !important;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: transparent;
          cursor: pointer;
        }
      }
    }
  }
`;
