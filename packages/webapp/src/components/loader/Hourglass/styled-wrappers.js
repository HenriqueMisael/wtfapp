import styled, { keyframes } from 'styled-components';
import { LoaderContainer } from '../styled-wrappers';

const ldsHourglass = keyframes`
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
`;

export const Loader =  styled(LoaderContainer)`
  &:after {
    content: ' ';
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: ${({size}) => 0.9375 * size};
    box-sizing: border-box;
    border: ${({size}) => `${0.4025 * size}px solid`};
    border-color: #ccc transparent;
    animation: ${ldsHourglass} 1.2s infinite;
  }
`;
