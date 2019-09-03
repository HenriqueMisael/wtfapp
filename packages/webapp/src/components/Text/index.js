import styled from 'styled-components';

export const Text = styled.p`
  font-family: 'Andale Mono', sans-serif;
  font-size: 14px;
  text-align: justify;
`;

export const HighlightedText = styled.div`
  font-family: 'Andale Mono', sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: ${({ color = 'dimgrey' }) => color};
`;

export const CenteredText = styled(HighlightedText)`
  text-align: center;
`;
