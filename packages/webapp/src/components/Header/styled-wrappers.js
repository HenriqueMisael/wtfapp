import styled from 'styled-components';
import { ElevatedContainer } from '../containers';
import { CenteredText } from '../Text';

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
`;

export const Container = styled(ElevatedContainer)`
  width: 50em;
  height: 3em;
  margin: auto;
  display: flex;
`;

export const HeaderText = styled(CenteredText)`
  flex: 1;
  font-size: 20px;
  font-variant: small-caps;
  letter-spacing: 1em;
  margin: auto;
`;

export const ButtonContainer = styled.div`
  margin: auto 1em auto auto;
`;
