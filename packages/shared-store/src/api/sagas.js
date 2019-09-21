import { put, select, takeLatest } from '@redux-saga/core/effects';
import { Creators, Types } from './duck';
import api from './api';
import { foodCreators, foodSelectors } from '../food';

function* setOnline() {
  yield put(foodCreators.foodClear());
  try {
    yield fetchOne(yield select(foodSelectors.getHead));
    yield put(Creators.apiSetOnline(true));
  } catch (e) {
    if(e.message === 'Network Error') {
      yield put(Creators.apiSetLastError('COULD_NOT_REACH'))
    } else {
      console.log('err', e);
    }
  }
}
function* setOffline() {
  yield put(Creators.apiSetOnline(false));
}

export function* learn(
  newFoodName,
  newFoodPeculiarity,
  current,
  previous,
  previousAnswer,
) {
  yield put(Creators.apiSetFetching(true));
  yield api.learn(newFoodName, newFoodPeculiarity, current, previous, previousAnswer);
  yield put(Creators.apiSetFetching(false));
}

export function* fetchOne(id) {
  yield put(Creators.apiSetFetching(true));
  const food = yield api.get(id);
  yield put(foodCreators.foodAdd(food));
  yield put(Creators.apiSetFetching(false));
}

export default [
  takeLatest(Types.API_SET_ONLINE_ASYNC, setOnline),
  takeLatest(Types.API_SET_OFFLINE_ASYNC, setOffline),
];
