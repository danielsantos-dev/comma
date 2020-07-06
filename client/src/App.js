import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Map from './components/map/map-page';
import Routes from './components/routing/Routes';

// Redux
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <div className="navbar-space"></div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Map} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
