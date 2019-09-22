import { createSelector } from '../util/selectors';

const getState = globalState => globalState.api;

const isOnline = createSelector(
  [getState],
  state => state.online,
);
const isFetching = createSelector(
  [getState],
  state => state.fetching,
);

export default Object.freeze({
  isOnline,
  isFetching,
});
