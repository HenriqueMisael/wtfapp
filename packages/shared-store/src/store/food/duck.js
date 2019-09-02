import { identity } from 'lodash-es';
import { createActions, createReducer, Types as defaultypes } from 'reduxsauce';

import { initial } from './model';

const setStage = (state, stage) => ({ ...state, stage });

const clear = () => ({ ...initial });

const set = (state, { current }) => ({ ...state, current });

const play = state => setStage(state, 'PLAY');

const success = state => setStage(state, 'SUCCESS');

const fail = state => setStage(state, 'FAIL');

export const { Types, Creators } = createActions({
  foodClear: [],
  foodSetCurrent: ['current'],
  foodHandleYesOptionAsync: [],
  foodHandleNoOptionAsync: [],
  foodSetPlay: [],
  foodSetSuccess: [],
  foodSetFail: []
});

export default createReducer(
  { ...initial },
  {
    [defaultypes.DEFAULT]: identity,
    [Types.FOOD_CLEAR]: clear,
    [Types.FOOD_SET_CURRENT]: set,
    [Types.FOOD_SET_PLAY]: play,
    [Types.FOOD_SET_SUCCESS]: success,
    [Types.FOOD_SET_FAIL]: fail
  }
);
