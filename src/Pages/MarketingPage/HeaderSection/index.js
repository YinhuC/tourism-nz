/* Third Party */
import React, { useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import { gsap } from 'gsap';

/* Components */
import {
  BackgroundContainer,
  HeaderContainer,
  BackgroundVideo,
  VideoContainer,
  MainContainer,
} from './style';
import video from '../../../Videos/dark.mp4';
import { DownArrow } from '../../../Components/Icons/DownArrow';

/* Functions */
/* need to actually wrap the icon AND cursor for it to change, also need 
the cursor to be a direct child of cursor manager */

function HeaderSection() {
  useEffect(() => {
    gsap.from(['#discover-hero', '#begin-journey-hero'], {
      delay: 0.8,
      duration: 1,
      y: 20,
      opacity: 0,
      stagger: 0.1,
      ease: 'power2',
    });
  });

  return (
    <>
      <VideoContainer>
        <BackgroundVideo autoPlay playsinline muted loop id='myVideo'>
          <source src={video} type='video/mp4' />
        </BackgroundVideo>
        <BackgroundContainer>
          <MainContainer>
            <Row></Row>
            <Row>
              <Col className='col-lg-7'>
                <HeaderContainer
                  id='discover-hero'
                  className='d-flex d-lg-none justify-content-center flex-column text-center'
                >
                  Discover <br />
                  New Zealand
                  <div id='begin-journey-hero' style={{ fontSize: '30px' }}>
                    Begin Your Journey
                  </div>
                </HeaderContainer>
                <HeaderContainer
                  id='discover-hero'
                  className='d-none d-lg-flex flex-column'
                >
                  Discover New Zealand
                  <div id='begin-journey-hero' style={{ fontSize: '30px' }}>
                    Begin Your Journey
                  </div>
                </HeaderContainer>
              </Col>
              <Col
                id='discover-hero'
                className='col-lg-5 d-none d-lg-flex justify-content-end mt-2 '
              >
                <DownArrow />
              </Col>
            </Row>
          </MainContainer>
        </BackgroundContainer>
      </VideoContainer>
      <BackgroundContainer />
    </>
  );
}

export default HeaderSection;
