import styled from 'styled-components';
import { ElevatedContainer } from '../containers';
import { Text } from '../Text';

export const ListCard = styled(ElevatedContainer)`
  margin-top: 1em;
  position: absolute;
`;

export const SingleOptionContainer = styled.div`
  display: flex;
  margin: 1px;
`;

export const OptionContainer = styled(Text)`
  padding: 0 8px;
  width: ${({width}) => width};
  cursor: ${({highlighted}) => highlighted ? 'default' : 'pointer'};
  display: flex;
  height: 2em;
  align-items: center;
  background-color: ${({ highlighted }) => (highlighted ? '#DDD' : 'rgb(245, 245, 245)')};

  &:hover {
    background-color: ${({ highlighted }) =>
      highlighted ? '#DDD' : 'rgb(170, 204, 255, 0.40)'};
  }
`;
