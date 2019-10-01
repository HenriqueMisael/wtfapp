import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { FailScreen, HomeScreen, LearningScreen, PlayScreen, SuccessScreen } from './screens';

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/play" component={PlayScreen} />
      <Route exact path="/fail" component={FailScreen} />
      <Route exact path="/success" component={SuccessScreen} />
      <Route exact path="/learning" component={LearningScreen} />
    </Switch>
  );
}

export default Router;
