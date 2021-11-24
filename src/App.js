/* Third Party */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

/* Components */
import MarketingPage from './Pages/MarketingPage';
import CursorManager from './Components/Cursor/Context/manager.tsx';
import { Cursor } from './Components/Cursor';
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

/* Functions */

function App() {
  return (
    <CursorManager>
      <Cursor />

      <Router>
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
      </Router>

      <Footer />
    </CursorManager>
  );
}

export default App;
