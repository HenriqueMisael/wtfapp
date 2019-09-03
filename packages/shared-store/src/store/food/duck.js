import { identity } from 'lodash-es';
import { createActions, createReducer, Types as defaultypes } from 'reduxsauce';

import { initial, Stages } from './model';

const setStage = (state, stage) => ({ ...state, stage });

const clear = () => ({ ...initial });

const setCurrent = (state, { current }) => ({ ...state, current });

const play = state => setStage(state, Stages.PLAY);

const success = state => setStage(state, Stages.SUCCESS);

const fail = state => setStage(state, Stages.FAIL);

const addFoods = (state, { newFoods }) => ({
  ...state,
  foods: new Map([...state.foods, ...newFoods])
});

export const { Types, Creators } = createActions({
  foodClear: [],
  foodSetCurrent: ['current'],
  foodHandleYesOptionAsync: [],
  foodHandleNoOptionAsync: [],
  foodStartPlaying: [],
  foodSetPlay: [],
  foodSetSuccess: [],
  foodSetFail: [],
  foodAddFoods: ['newFoods'],
  foodResetAsync: []
});

export default createReducer(
  { ...initial },
  {
    [defaultypes.DEFAULT]: identity,
    [Types.FOOD_CLEAR]: clear,
    [Types.FOOD_SET_CURRENT]: setCurrent,
    [Types.FOOD_SET_PLAY]: play,
    [Types.FOOD_SET_SUCCESS]: success,
    [Types.FOOD_SET_FAIL]: fail,
    [Types.FOOD_ADD_FOODS]: addFoods
  }
);
