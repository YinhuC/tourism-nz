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
  text-align: center;

  width: 100vw;
  height: 100vh;

  background-color: black;
`;

export const LoaderTitle = styled.div`
  color: white;
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  font-size: 2.5rem;
`;

export const LoaderSubtitle = styled.div`
  color: wheat;
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 300;
  font-size: 2rem;
`;
