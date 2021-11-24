import React, { useState, useEffect, useRef } from 'react';
import {
  StickyInnerContainer,
  HorizontalTranslateContainer,
  TallOuterContainer,
} from './style';

/*https://sudo.isl.co/translate-vertical-horizontal/*/

const calcDynamicHeight = (objectWidth) => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return (objectWidth - vw) / 3.1 + 150 + vh;
};

const handleDynamicHeight = (ref, setDynamicHeight) => {
  if (ref.current !== null) {
    const objectWidth = ref.current.scrollWidth;
    const dynamicHeight = calcDynamicHeight(objectWidth);
    setDynamicHeight(dynamicHeight);
  }
};

export default ({ children }) => {
  const [dynamicHeight, setDynamicHeight] = useState(null);
  const [translateX, setTranslateX] = useState(0);

  const containerRef = useRef(null);
  const objectRef = useRef(null);

  const resizeHandler = () => {
    handleDynamicHeight(objectRef, setDynamicHeight);
  };

  const calculateX = () => {
    const offsetTop = -containerRef.current.offsetTop * 3;
    setTranslateX(offsetTop);
  };

  useEffect(() => {
    handleDynamicHeight(objectRef, setDynamicHeight);
    window.addEventListener('resize', resizeHandler);
    window.addEventListener('scroll', calculateX);
    return function cleanup() {
      window.removeEventListener('scroll', calculateX);
    };
  }, []);

  return (
    <TallOuterContainer dynamicHeight={dynamicHeight}>
      <StickyInnerContainer ref={containerRef}>
        <HorizontalTranslateContainer translateX={translateX} ref={objectRef}>
          {children}
        </HorizontalTranslateContainer>
      </StickyInnerContainer>
    </TallOuterContainer>
  );
};
