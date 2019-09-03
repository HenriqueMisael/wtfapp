import styled from 'styled-components';

export const HDivider = styled.div`
  display: flex;
  flex: 1;
  height: 1px;
  margin: 1em;
  background: lightgrey;
  grid-column: 1/-1;
`;

export const VDivider = styled.div`
  display: flex;
  width: 1px;
  margin: 8px 1em;
  background: lightgrey;
  grid-row: 1/-1;
`;
