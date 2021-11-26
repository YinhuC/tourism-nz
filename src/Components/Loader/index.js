/* Third Party */
import React, { useContext, useEffect, useState } from 'react';

/* Components */
import { LoaderContainer, CustomProgress } from './style';
import CursorContext from '../Cursor/Context/CursorContext';

/* Functions */

function Loader() {
  const { setType } = useContext(CursorContext);
  const [loadValue, setLoadValue] = useState(0);

  useEffect(() => {
    setType('expand');
    const interval = setInterval(() => {
      setLoadValue(loadValue + 5);
    }, 100);

    return function cleanup() {
      clearInterval(interval);
      setType('default');
    };
  });

  return (
    <LoaderContainer>
      <CustomProgress theme='primary' value={loadValue} />
    </LoaderContainer>
  );
}

export default Loader;
