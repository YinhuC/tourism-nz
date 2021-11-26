/* Third Party */
import React, { useEffect, useState } from 'react';

/* Components */
import CursorManager from './Components/Cursor/Context/manager.tsx';
import { Cursor } from './Components/Cursor';
import { Routing } from './routes';
import Loader from './Components/Loader';

/* Functions */

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(false);
    // setTimeout(() => {
    //   setLoader(false);
    // }, 3000);
    return function cleanup() {
      setLoader(true);
    };
  }, []);

  return (
    <CursorManager>
      <Cursor />
      {loader ? <Loader /> : <Routing />}
    </CursorManager>
  );
}

export default App;
