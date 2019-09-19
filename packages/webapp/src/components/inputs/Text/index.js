import React from 'react';
import { Input, InputContainer } from '../styled-wrappers';

export default ({ children, onChange, value, placeholder, onEnter, autoFocus }) => (
  <InputContainer>
    <Input
      autoFocus={autoFocus}
      type="text"
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      onKeyDown={evt => evt.keyCode === 13 && onEnter()}
    />
    {children}
  </InputContainer>
);
