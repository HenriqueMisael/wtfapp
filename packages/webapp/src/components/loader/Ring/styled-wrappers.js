import styled from 'styled-components';

export const LoaderContainer = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-around;
`;
export const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  margin: auto;
  width: 32px;
  height: 32px;

  & .path {
    stroke: #5652bf;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
