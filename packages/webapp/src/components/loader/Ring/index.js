import React from 'react';
import { LoaderContainer, StyledSpinner } from './styled-wrappers';

const Spinner = () => (
  <LoaderContainer>
    <StyledSpinner viewBox="0 0 50 50">
      <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="4" />
    </StyledSpinner>
  </LoaderContainer>
);

export default Spinner;
