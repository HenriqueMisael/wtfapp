import { all } from 'redux-saga/effects';

import { foodSagas } from './food';
import { combineReducers } from 'redux';
import food from './food/duck';

export { environment, initNetworkConfig } from './config';

export { foodSelectors, foodCreators } from './food';

export { Stages } from './food';

export const Reducers = combineReducers({
  food,
});

export function* rootSagas() {
  yield all([...foodSagas]);
}
