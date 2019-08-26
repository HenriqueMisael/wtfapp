import { createSelector } from '../../util/selectors';

/**
 * @returns {import('./model').State}
 */
const getState = globalState => globalState.food;

export const getCurrent = createSelector(
  [getState],
  state => state.current
);
