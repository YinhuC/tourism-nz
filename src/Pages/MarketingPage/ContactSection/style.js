import styled from 'styled-components';

export const ContactContainer = styled.section`
  width: 100vw;

  border-top: 2px black solid;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 100vh;
`;

export const ContactText = styled.div`
  width: 100%;

  font-family: 'Playfair Display', serif;
  font-size: 6vw;
  font-weight: 400;
  color: black;
  text-transform: uppercase;
  text-align: center;
`;

export const Dash = styled.hr`
  background: black;
  width: 20vw;
  height: 0.1rem;
  margin: 2rem 5rem;
`;

export const EmailInfo = styled.a`
  color: wheat;
  margin: 2rem 0 0 0;
  font-family: 'Playfair Display', serif;
  font-size: 4vw;
  font-weight: 400;
  text-align: center;

  &:hover {
    text-decoration: none;
    color: lightblue;
  }
`;
