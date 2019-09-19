import { identity } from 'lodash-es';
import { createActions, createReducer, Types as defaultypes } from 'reduxsauce';

import { initial, Stages } from './model';

const setStage = (state, stage) => ({ ...state, stage });

const clear = state => ({ ...initial, foods: state.foods });

const setAnswer = (state, { answer }) => ({ ...state, answer });

const setCurrent = (state, { current }) => ({
  ...state,
  previousAnswer: state.answer,
  previous: state.current,
  current,
});

const play = state => setStage(state, Stages.PLAY);

const success = state => setStage(state, Stages.SUCCESS);

const fail = state => setStage(state, Stages.FAIL);

const start = state => setStage(state, Stages.START);

const learning = (state, { newFoodName }) => ({ ...setStage(state, Stages.LEARNING), learning: newFoodName });

const addFoods = (state, { newFoods }) => ({
  ...state,
  foods: state.foods.merge(newFoods),
});

const setOnline = (state, { online }) => ({ ...state, online });

export const { Types, Creators } = createActions({
  foodClear: [],
  foodSetAnswer: ['answer'],
  foodSetCurrent: ['current'],
  foodSetPlay: [],
  foodSetSuccess: [],
  foodSetFail: [],
  foodSetStart: [],
  foodSetLearning: ['newFoodName'],
  foodAddFoods: ['newFoods'],
  foodStartPlaying: [],
  foodHandleYesOptionAsync: [],
  foodHandleNoOptionAsync: [],
  foodFinishLearningAsync: ['newFoodPeculiarity'],
});

export default createReducer(
  { ...initial },
  {
    [defaultypes.DEFAULT]: identity,
    [Types.FOOD_CLEAR]: clear,
    [Types.FOOD_SET_ANSWER]: setAnswer,
    [Types.FOOD_SET_CURRENT]: setCurrent,
    [Types.FOOD_SET_PLAY]: play,
    [Types.FOOD_SET_SUCCESS]: success,
    [Types.FOOD_SET_FAIL]: fail,
    [Types.FOOD_SET_START]: start,
    [Types.FOOD_SET_LEARNING]: learning,
    [Types.FOOD_ADD_FOODS]: addFoods,
  },
);
