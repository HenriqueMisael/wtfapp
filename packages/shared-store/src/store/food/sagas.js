import { put, select, takeLatest } from 'redux-saga/effects';

import { Creators, Types } from './duck';
import { foodSelectors } from './index';

function* handleOption(selector, onEndAction) {
  const next = yield select(selector);

  if (next) {
    yield put(Creators.foodSetCurrent(next));
  } else if (onEndAction) {
    yield put(onEndAction);
  }
}

function* handleYesOption() {
  handleOption(foodSelectors.getCurrentYes, Creators.foodSetSuccess());
}

function* handleNoOption() {
  handleOption(foodSelectors.getCurrentNo, Creators.foodSetFail());
}

export default [
  takeLatest(Types.FOOD_HANDLE_YES_OPTION_ASYNC, handleYesOption),
  takeLatest(Types.FOOD_HANDLE_NO_OPTION_ASYNC, handleNoOption)
];
