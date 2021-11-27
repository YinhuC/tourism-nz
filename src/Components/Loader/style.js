import styled from 'styled-components';

export const LoaderContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2000;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  background-color: black;
`;

export const LoaderTitle = styled.h1`
  color: white;
`;

export const LoaderSubtitle = styled.h2`
  color: wheat;
`;
