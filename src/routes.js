/* Third Party */
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { gsap } from 'gsap';

/* Components */
import MarketingPage from './Pages/MarketingPage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Error from './Pages/ErrorPage';
import LocationComponent from './Components/LocationSection';
import { locationRoutes } from './Pages/LocationPages/constants';

const routes = [
  {
    path: '/',
    name: 'MarketingPage',
    Component: MarketingPage,
  },
];

export function Routing() {
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
    <Router forceRefresh={true}>
      <Header />

      <Switch>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <div>
              <Component />
            </div>
          </Route>
        ))}

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
    </Router>
  );
}
