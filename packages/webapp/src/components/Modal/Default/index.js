import React from 'react';
import { Container, Overlay } from '../styled-wrapper';

export default ({ children }) => {
  return (
    <Overlay>
      <Container>{children}</Container>
    </Overlay>
  );
};
