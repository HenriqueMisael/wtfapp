import { all, put, select, takeLatest } from 'redux-saga/effects';
import { Map } from 'immutable';

import { Creators, Types } from './duck';
import { foodCreators, foodSelectors } from './index';
import { Food } from './model';

function* handleOption(selector, onEndAction) {
  const next = yield select(selector);

  if (next) {
    yield put(Creators.foodSetCurrent(next));
  } else if (onEndAction) {
    yield put(onEndAction);
  }
}

function* handleYesOption() {
  yield put(foodCreators.foodSetAnswer(true));
  yield handleOption(foodSelectors.getCurrentYes, Creators.foodSetSuccess());
}

function* handleNoOption() {
  yield put(foodCreators.foodSetAnswer(false));
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

function* learn({ newFoodPeculiarity }) {

  const [previousAnswer, newFoodName, current, previous] = yield all([
    select(foodSelectors.getPreviousAnswer),
    select(foodSelectors.getLearningFood),
    select(foodSelectors.getCurrent),
    select(foodSelectors.getPrevious),
  ]);

  const newFood = Food(newFoodName);
  const newPeculiarity = Food(newFoodPeculiarity, current.ID, newFood.ID);
  if (previousAnswer)
    previous.yes = newPeculiarity.ID;
  else
    previous.no = newPeculiarity.ID;

  const foodsChanges = Map([
    [previous.ID, previous],
    [current.ID, current],
    [newPeculiarity.ID, newPeculiarity],
    [newFood.ID, newFood],
  ]);

  yield all([put(Creators.foodAddFoods(foodsChanges)), put(Creators.foodClear())]);
}

export default [
  takeLatest(Types.FOOD_HANDLE_YES_OPTION_ASYNC, handleYesOption),
  takeLatest(Types.FOOD_HANDLE_NO_OPTION_ASYNC, handleNoOption),
  takeLatest(Types.FOOD_RESET_ASYNC, reset),
  takeLatest(Types.FOOD_START_PLAYING, startPlaying),
  takeLatest(Types.FOOD_FINISH_LEARNING_ASYNC, learn),
];
