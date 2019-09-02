import { all } from 'redux-saga/effects';
//sagas
import { default as foodSagas } from './store/food/sagas';
// reducers
export { default as reducers } from './store/duck';

export { environment, initNetworkConfig } from './config';

export function* rootSagas() {
  yield all([...foodSagas]);
}

// Action creators and selectors
export * from './store/food';
