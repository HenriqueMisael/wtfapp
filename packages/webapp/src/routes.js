import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomeScreen, PlayScreen } from './screens';

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/play" component={PlayScreen} />
    </Switch>
  );
}

export default Router;
