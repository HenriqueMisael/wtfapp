import styled from 'styled-components';

export const Text = styled.div`
  font-family: 'Andale Mono', sans-serif;
  font-size: 16px;
  font-weight: bold;
`;

export const CenteredText = styled(Text)`
  text-align: center;
`;

export const HeaderText = styled(Text)`
  font-size: 20px;
  font-variant: small-caps;
  letter-spacing: 1em;
  margin: auto;
`;
