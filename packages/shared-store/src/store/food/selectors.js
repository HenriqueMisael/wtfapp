import { createSelector } from '../../util/selectors';

const getState = globalState => globalState.food;

const getCurrent = createSelector(
  [getState],
  state => state.current
);

const getAll = createSelector(
  [getState],
  state => state.all
);

export const getCurrentYes = createSelector(
  [getCurrent, getAll],
  (current, all) => {
    if (current.yes && all.has(current.yes)) {
      return all.get(current.yes);
    }
  }
);

export const getCurrentNo = createSelector(
  [getCurrent, getAll],
  (current, all) => {
    if (current.no && all.has(current.no)) {
      return all.get(current.no);
    }
  }
);

export const getCurrentQuestion = createSelector(
  [getCurrent],
  current => `A comida que você pensou é ${current.name}?`
);
