/* Third Party */
import React, { useContext, useEffect } from 'react';

/* Components */
import { LoaderContainer, LoaderTitle, LoaderSubtitle } from './style';
import CursorContext from '../Cursor/Context/CursorContext';

/* Functions */

function Loader() {
  const { setType } = useContext(CursorContext);

  useEffect(() => {
    setType('expand');
    return function cleanup() {
      setType('default');
    };
  });

  return (
    <LoaderContainer>
      <LoaderTitle>Promote Tourism New Zealand</LoaderTitle>
      <LoaderSubtitle>Travel - Explore - Experience</LoaderSubtitle>
    </LoaderContainer>
  );
}

export default Loader;
