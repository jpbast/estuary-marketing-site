import { css, styled } from 'styled-components';
import { OutboundLink } from '../../OutboundLink';

export const ButtonContainer = styled(OutboundLink)<{ variant: 'default' | 'ghost' }>`
  ${({ variant }) => {
    const isGhost = variant === 'ghost';

    return css`
      max-width: 200px;
      width: 100%;
      background-color: ${isGhost ? 'transparent' : '#5072eb'};
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 52px;
      color: white;
      font-size: 1rem;
      outline: none;
      border: ${isGhost ? '2px solid #5072eb' : 'none'};
    `;
  }}
`;
