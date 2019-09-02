import styled from 'styled-components';
import { ElevatedContainer } from '../containers';

export const Overlay = styled.div`
  height: -webkit-fill-available;
  display: flex;
  flex-direction: column;
`;

export const Container = styled(ElevatedContainer)`
  width: 30em;
  margin: auto;
  padding: 1em;
`;
