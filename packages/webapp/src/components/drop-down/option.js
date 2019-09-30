import React from 'react';
import { OptionContainer } from './styled-wrappers';

const Option = ({ option, onSelect, highlighted, width }) => {
  return (
    <OptionContainer width={width} highlighted={highlighted} onClick={() => onSelect && onSelect(option.value)}>
      {option.label}
    </OptionContainer>
  );
};

export default Option;
