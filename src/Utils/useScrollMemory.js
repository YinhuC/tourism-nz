import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

/**
 * Hook to solve page location issue, new pages will open at the top and clicking back will return to position you left
 * Taken from: https://stackoverflow.com/questions/51906708/react-router-v4-keep-scrolling-position-when-switching-components
 * Also ran into another issue when implementing, solved here:
 * https://stackoverflow.com/questions/63761899/cannot-read-property-push-of-undefined-for-react-use-history?noredirect=1&lq=1
 */

/**
 * @description Overrides the PUSH and REPLACE methods in history to
 * save the window scroll position for the route.
 *
 * @param { Object } scrollData - Contains pathname and its scroll position.
 */
const useScrollMemory = (scrollData) => {
  const history = useHistory();

  useEffect(() => {
    const { push, replace } = history;

    // Override the history PUSH method to automatically set scroll state.
    history.push = (path, state = {}) => {
      scrollData[history.location.pathname] = window.scrollY;
      push(path, state);
    };

    // Override the history REPLACE method to automatically set scroll state.
    history.replace = (path, state = {}) => {
      scrollData[history.location.pathname] = window.scrollY;
      replace(path, state);
    };

    // Listen for location changes and set the scroll position accordingly.
    const unregister = history.listen((location, action) => {
      window.scrollTo(
        0,
        action !== 'POP' ? 0 : scrollData[location.pathname] ?? 0
      );
    });

    // Unregister listener when component unmounts.
    return () => {
      unregister();
    };
  }, [history, scrollData]);
};

export default useScrollMemory;
