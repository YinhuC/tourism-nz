/* Third Party */
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

/* Components */
import HorizontalScroll from '../../../Components/HorizontalScroll';
import {
  BumperSection,
  CardsContainer,
  GlobalStyle,
  HorizontalSection,
  Main,
  VerticalContainer,
} from './style';
import CustomCard from '../../../Components/Card';
import { location, info, arrayImages } from '../../LocationPages/constants';

/* Functions */

/*https://sudo.isl.co/translate-vertical-horizontal/*/

export default function SlideSection() {
  gsap.registerPlugin(ScrollTrigger);

  const topSlideBumper = useRef(null);

  useEffect(() => {
    gsap.from(topSlideBumper.current, {
      delay: 0.1,
      duration: 1,
      y: 20,
      opacity: 0,
      stagger: 0.1,
      ease: 'power2',

      scrollTrigger: {
        trigger: topSlideBumper.current,
      },
    });
  });

  const Cards = React.memo(() =>
    arrayImages.map((currentImage, i) => (
      <CustomCard
        image={currentImage}
        header={location[i]}
        subheader={info[i]}
        key={`card-${i}`}
        url={'/location/' + location[i].replace(/\s+/g, '-').toLowerCase()}
      />
    ))
  );

  return (
    <div>
      <GlobalStyle />
      <Main>
        <BumperSection>
          <h2 ref={topSlideBumper}>Start Exploring Wherever You Want</h2>
        </BumperSection>
        <HorizontalSection className='d-none d-md-flex'>
          <HorizontalScroll>
            <CardsContainer>
              <Cards />
            </CardsContainer>
          </HorizontalScroll>
        </HorizontalSection>

        <HorizontalSection className='d-flex d-md-none'>
          <VerticalContainer>
            <CardsContainer className='vertical-cards-container flex-column'>
              <Cards />
            </CardsContainer>
          </VerticalContainer>
        </HorizontalSection>
      </Main>
    </div>
  );
}
