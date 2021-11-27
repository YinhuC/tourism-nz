/* Third Party */
import React, { useEffect, useState } from 'react';

/* Components */
import CursorManager from './Components/Cursor/Context/manager.tsx';
import { Cursor } from './Components/Cursor';
import { Routing } from './routes';

/* Functions */

function App() {
  return (
    <CursorManager>
      <Cursor />
      <Routing />
    </CursorManager>
  );
}

export default App;
