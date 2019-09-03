import { put, select, takeLatest } from 'redux-saga/effects';

import { Creators, Types } from './duck';
import { foodCreators, foodSelectors } from './index';

function* handleOption(selector, onEndAction) {
  const next = yield select(selector);

  if (next) {
    yield put(Creators.foodSetCurrent(next));
  } else if (onEndAction) {
    yield put(onEndAction);
  }
}

function* handleYesOption() {
  yield handleOption(foodSelectors.getCurrentYes, Creators.foodSetSuccess());
}

function* handleNoOption() {
  yield handleOption(foodSelectors.getCurrentNo, Creators.foodSetFail());
}

function* startPlaying() {
  const first = yield select(foodSelectors.getFirst);
  yield put(foodCreators.foodSetCurrent(first));
  yield put(foodCreators.foodSetPlay());
}

function* reset() {
  yield put(Creators.foodClear());
}

export default [
  takeLatest(Types.FOOD_HANDLE_YES_OPTION_ASYNC, handleYesOption),
  takeLatest(Types.FOOD_HANDLE_NO_OPTION_ASYNC, handleNoOption),
  takeLatest(Types.FOOD_RESET_ASYNC, reset),
  takeLatest(Types.FOOD_START_PLAYING, startPlaying)
];
