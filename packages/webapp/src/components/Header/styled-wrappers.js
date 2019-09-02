import styled from 'styled-components';
import { ElevatedContainer } from '../containers';

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
