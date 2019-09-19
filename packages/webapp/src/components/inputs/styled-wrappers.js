import styled from 'styled-components';

export const Input = styled.input`
  padding-left: 8px;
  height: ${({ height = '2em' }) => height};
  width: ${({ width }) => width};
  background-color: transparent;
  border: none;
  font-size: larger;
  width: -webkit-fill-available;

  &:focus {
    outline: none;
  }
`;

export const InputContainer = styled.div`
  align-items: center;
  display: flex;
  width: ${({ width }) => width};
  background-color: #f9f9f9;
  border: lightgrey solid 2px;
  font-size: larger;
  width: -webkit-fill-available;
`;
