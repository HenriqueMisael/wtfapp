import React from 'react';
import { CenteredText } from '../../Text';
import { ButtonContainer } from '../styled-wrappers';

export default ({ text, action }) => (
  <ButtonContainer onClick={action}>
    <CenteredText>{text}</CenteredText>
  </ButtonContainer>
);
