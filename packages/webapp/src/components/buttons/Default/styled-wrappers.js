import styled from 'styled-components';
import { ButtonContainer as NoBorderButtonContainer } from '../styled-wrappers';

export const ButtonContainer = styled(NoBorderButtonContainer)`
  background-color: ${({ background }) => (background ? background : 'dimgrey')};
  border-radius: 5px;
`;
