import React from 'react';
import { ButtonContainer } from './styled-wrappers';
import { CenteredText } from '../../Text';

export default ({ text, action, background }) => (
  <ButtonContainer onClick={action} background={background}>
    <CenteredText color={'#F5F5F5'}>{text}</CenteredText>
  </ButtonContainer>
);
