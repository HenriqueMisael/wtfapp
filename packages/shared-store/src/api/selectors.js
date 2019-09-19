import { createSelector } from '../util/selectors';

const getState = globalState => globalState.api;

const isOnline = createSelector(
  [getState],
  state => state.online,
);

export default Object.freeze({
  isOnline,
});
