import React from 'react';
import Icon from './Icon';
import { ButtonContainer } from './styled-wrappers';

export default ({ action }) => {
  return (
    <ButtonContainer onClick={action}>
      <Icon width='24' height='24'/>
    </ButtonContainer>
  );
}

