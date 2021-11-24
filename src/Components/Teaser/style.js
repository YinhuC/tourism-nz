import styled from 'styled-components';
import { Card, CardImg, CardHeader, CardFooter } from 'shards-react';

export const Teaser = styled(Card)`
  height: 100%;

  display: flex;
  align-items: flex-start;
`;

export const TextBody = styled.div`
  padding-bottom: 20px;
`;

export const CustomCardImg = styled(CardImg)`
  width: 100%;
`;

export const CustomCardHeader = styled(CardHeader)`
  width: 100%;
`;

export const CustomCardFooter = styled(CardFooter)`
  width: 100%;
`;
