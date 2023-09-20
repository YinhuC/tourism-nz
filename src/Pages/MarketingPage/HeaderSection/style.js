import styled from "styled-components";
import { Container } from "reactstrap";

export const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  z-index: -1;
`;

export const VideoContainer = styled.div`
  /* Make video to at least 100% wide and tall */
  min-width: 100%;
  min-height: 100%;

  /* Setting width & height to auto prevents the browser from stretching or squishing the video */
  width: auto;
  height: auto;

  /* Center the video */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const BackgroundContainer = styled.div`
  background-color: black;

  /* Full height */
  height: 100vh;
  width: 100%;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 150px;
  margin: 0 0 60px 0;

  user-select: none;
  color: white;
  font-size: 4rem;
  line-height: 60px;
  font-family: "Playfair Display", serif;
`;

export const MainContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
