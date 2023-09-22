import styled from "styled-components";
import { Card, CardImg, CardHeader, CardFooter, CardTitle } from "reactstrap";

export const Teaser = styled(Card)`
  height: 100%;

  display: flex;
  align-items: flex-start;
  font-family: "Inter", sans-serif;
`;

export const TextBody = styled.div`
  padding-bottom: 30px;
`;

export const CustomCardImg = styled(CardImg)`
  width: 100%;
`;

export const CustomCardHeader = styled(CardHeader)`
  width: 100%;
  padding: 15px;
`;

export const CustomCardFooter = styled(CardFooter)`
  width: 100%;
  font-style: italic;
  padding: 15px;
`;

export const CustomCardTitle = styled(CardTitle)`
  width: 100%;
  font-family: "Playfair Display", serif;
  font-size: 30px;
  margin: 0 0 10px 0;
`;
