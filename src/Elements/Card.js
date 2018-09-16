import styled from 'styled-components';
import { elevation, transition, black } from 'Utilities';

export const Card = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 15px;
  color: ${black};
  ${elevation[4]};
  ${transition({
    property: 'box-shadow',
    ease: 'ease-in',
    length: '0.2s'
  })};

  &:hover {
    ${elevation[5]}
  }
`;
