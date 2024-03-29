import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    margin: 0;

    li {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 0;
    }
  }

  strong {
    color: #47506d;
    font-weight: 600;
    font-size: 1rem;
  }

  p {
    margin-bottom: var(--spacing-0);
  }

  .bio-avatar {
    max-width: 36px;
    border-radius: 100%;
  }
`;
