import { identity } from 'lodash-es';
import { createActions, createReducer, Types as defaultypes } from 'reduxsauce';

import { initial } from './model';

/**
 * @returns {import('./model').State}
 */
const clear = () => ({ ...initial });

/**
 * @returns {import('./model').State}
 */
const set = (state, { current }) => ({ ...state, current });

export const { Types, Creators } = createActions({
  foodClear: [],
  foodSetCurrent: ['current'],
  foodSetCurrentAsync: ['id'],
  foodHandleYesOptionAsync: ['food']
});

export default createReducer(
  { ...initial },
  {
    [defaultypes.DEFAULT]: identity,
    [Types.FOOD_CLEAR]: clear,
    [Types.FOOD_SET_CURRENT]: set
  }
);
