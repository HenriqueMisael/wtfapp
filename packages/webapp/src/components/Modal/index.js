import React from 'react';
import { Container, Overlay } from './styled-wrapper';

export default ({ children }) => {
  console.log(children)
  return (
    <Overlay>
      <Container>{children}</Container>
    </Overlay>
  );
};
