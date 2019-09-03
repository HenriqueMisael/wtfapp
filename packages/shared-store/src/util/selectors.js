import { createSelectorCreator, defaultMemoize } from 'reselect';

export const createSelector = createSelectorCreator(defaultMemoize);
