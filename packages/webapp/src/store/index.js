import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { environment, Reducers, rootSagas } from 'shared-store';

const NodeEnvDevelopment = 'development';
const sagaMiddleware = createSagaMiddleware();

let composeEnhancers = compose;

if (environment.nodeEnv.trim() === NodeEnvDevelopment) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export default createStore(
  Reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSagas);
