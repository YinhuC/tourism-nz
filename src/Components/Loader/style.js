import styled from 'styled-components';
import { Progress } from 'shards-react';

export const LoaderContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2000;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-color: black;
`;

export const CustomProgress = styled(Progress)`
  width: 50vw;
`;
