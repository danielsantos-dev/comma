import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Map from '../map/map-page';
import WorkingChill from '../workingchill/workingchill';  
import NotFound from '../layout/NotFound';


const Routes = props => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/map" component={Map} />
        <Route exact path="/chill" component={WorkingChill} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
