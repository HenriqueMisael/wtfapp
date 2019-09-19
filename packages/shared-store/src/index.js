import { all } from 'redux-saga/effects';

import { foodSagas } from './food';
import { apiSagas } from './api';
import { combineReducers } from 'redux';
import food from './food/duck';
import api from './api/duck';

export { environment, initNetworkConfig } from './config';

export { foodSelectors, foodCreators } from './food';
export { apiSelectors, apiCreators } from './api';

export { Stages } from './food';

export const Reducers = combineReducers({
  food,
  api,
});

export function* rootSagas() {
  yield all([...foodSagas, ...apiSagas]);
}
