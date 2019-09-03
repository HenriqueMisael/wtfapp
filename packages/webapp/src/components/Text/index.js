import styled from 'styled-components';

export const Text = styled.p`
  font-family: 'Didact Gothic Font', sans-serif;
  font-size: 14px;
  text-align: justify;
  color: ${({ color = 'dimgrey' }) => color};
`;

export const HighlightedText = styled(Text)`
  font-size: 16px;
  font-weight: bold;
`;

export const CenteredText = styled(HighlightedText)`
  text-align: center;
`;
