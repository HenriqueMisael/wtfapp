import styled from 'styled-components';

export const ElevatedContainer = styled.div`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border: thin solid lightgrey;
  background-color: #f5f5f5;
`;

export const CentralizedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
