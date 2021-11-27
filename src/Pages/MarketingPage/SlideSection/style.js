import styled, { createGlobalStyle } from 'styled-components';

/*https://sudo.isl.co/translate-vertical-horizontal/*/

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: sans-serif;
  }
`;

export const Main = styled.div``;

export const HorizontalSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

export const BumperSection = styled.section`
  text-align: center;
  padding: 128px 16px;
  background-color: rgb(171, 213, 255);
  user-select: none;
`;

export const CardsContainer = styled.div`
  position: relative;
  height: 100%;
  padding: 0 2% 0 7%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

export const VerticalContainer = styled.div`
  width: 100%;
  .image-container {
    width: 100%;
    height: 400px;
    margin: 30px 10px 30px 10px;
  }
  .vertical-cards-container {
    padding: 0 5% 0 5%;
  }
`;

export const BumperText = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  font-weight: 400;
  color: black;
`;
