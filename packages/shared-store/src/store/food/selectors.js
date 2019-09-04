import { createSelector } from '../../util/selectors';

const getState = globalState => globalState.food;

const getAnswer = createSelector(
  [getState],
  state => state.answer,
);

const getPreviousAnswer = createSelector(
  [getState],
  state => state.previousAnswer,
);

const getCurrent = createSelector(
  [getState],
  state => state.current,
);

const getPrevious = createSelector(
  [getState],
  state => state.previous,
);

const getAll = createSelector(
  [getState],
  state => state.foods,
);

const getCurrentYes = createSelector(
  [getCurrent, getAll],
  (current, all) => {
    if (current.yes && all.has(current.yes)) {
      return all.get(current.yes);
    }
  },
);

const getCurrentNo = createSelector(
  [getCurrent, getAll],
  (current, all) => {
    if (current.no && all.has(current.no)) {
      return all.get(current.no);
    }
  },
);

const getCurrentName = createSelector(
  [getCurrent],
  current => current.name,
);

const getCurrentQuestion = createSelector(
  [getCurrentName],
  name => `A comida que você pensou é ${name}?`,
);

const getStage = createSelector(
  [getState],
  state => state.stage,
);

const getHead = createSelector(
  [getState],
  state => state.head,
);

const getFirst = createSelector(
  [getAll, getHead],
  (all, head) => all.get(head),
);

const getLearningFood = createSelector(
  [getState],
  state => state.learning,
);

export default Object.freeze({
  getAll,
  getPrevious,
  getPreviousAnswer,
  getAnswer,
  getCurrent,
  getCurrentYes,
  getCurrentNo,
  getCurrentName,
  getCurrentQuestion,
  getStage,
  getFirst,
  getLearningFood,
});
