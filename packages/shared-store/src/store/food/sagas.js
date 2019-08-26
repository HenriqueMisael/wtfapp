import { call, put, takeLatest } from 'redux-saga/effects';

import { Creators, Types } from './duck';
import { fetchOne } from './api';

function* setCurrentFood(id) {
  const current = yield call(fetchOne, id);
  yield put(Creators.foodSetCurrent(current));
}

function* handleYesOption(food) {}

export default [
  takeLatest(Types.FOOD_SET_CURRENT_ASYNC, setCurrentFood),
  takeLatest(Types.FOOD_HANDLE_YES_OPTION_ASYNC, handleYesOption)
];
