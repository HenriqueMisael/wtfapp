import { all } from 'redux-saga/effects';

import { foodSagas } from './store/food';

export { default as Reducers } from './store/duck';

export { environment, initNetworkConfig } from './config';

export { foodSelectors, foodCreators } from './store/food';

export { Stages } from './store/food';

export function* rootSagas() {
  yield all([...foodSagas]);
}
