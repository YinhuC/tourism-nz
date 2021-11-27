import styled from 'styled-components';

export const FooterContainer = styled.section`
  padding: 150px 0 0 0;
  background-color: black;
`;

export const Copyright = styled.h5`
  display: flex;
  align-items: center;
  user-select: none;
  color: lightgray;
  font-family: 'Inter', sans-serif;
`;

export const FooterText = styled.h4`
  user-select: none;
  color: lightgray;
  margin: 20px 0 0 0;
  font-family: 'Inter', sans-serif;
`;

export const FooterLinks = styled.a`
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  line-height: 25px;
  user-select: none;
  color: lightgray;
  margin: 20px 0 0 0;
  &:hover {
    color: #e8e8e8;
    text-decoration: none;
  }
`;
