import { Map } from 'immutable';

export const Stages = {
  START: 'START',
  PLAY: 'PLAY',
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL'
};

const Food = (name, no, yes) => ({ name, yes, no });

export const initial = Object.freeze({
  stage: Stages.START,
  current: undefined,
  head: 1,
  foods: Map([
    [1, Food('lasanha', 2)],
    [2, Food('macarrão', 3)],
    [3, Food('brigadeiro')]
  ])
});
