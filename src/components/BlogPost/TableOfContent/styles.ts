import { Accordion } from '@mui/material';
import { styled } from 'styled-components';

export const Container = styled(Accordion)`
  margin-top: 0 !important;

  &::before {
    display: none;
  }
`;
