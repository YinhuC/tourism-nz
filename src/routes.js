/* Third Party */
import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { gsap } from 'gsap';

/* Components */
import MarketingPage from './Pages/MarketingPage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Error from './Pages/ErrorPage';
import LocationComponent from './Components/LocationSection';
import { locationRoutes } from './Pages/LocationPages/constants';
import Loader from './Components/Loader';
import useScrollMemory from './Utils/useScrollMemory';

const routes = [
  {
    path: '/',
    name: 'MarketingPage',
    Component: MarketingPage,
  },
];

export function Routing() {
  const [loader, setLoader] = useState(true);
  const scrollData = {};
  useScrollMemory(scrollData);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  useEffect(() => {
    gsap.from('#promote-header', {
      delay: 0.5,
      duration: 1,
      y: 20,
      opacity: 0,
      ease: 'power2',
    });
  });

  return (
    <>
      <Header />

      <Switch>
        <Route key={routes[0].path} exact path={routes[0].path}>
          {loader ? <Loader /> : <MarketingPage />}
        </Route>

        {locationRoutes.map((route, index) => (
          <Route
            key={`location-page-${index}`}
            path={'/location/' + route.path}
            exact={route.exact}
          >
            <LocationComponent
              image={route.image}
              locationName={route.path}
              colour={route.color}
            />
          </Route>
        ))}

        <Route path='/404' component={Error} />
        <Redirect to='/404' />
      </Switch>

      <Footer />
    </>
  );
}
