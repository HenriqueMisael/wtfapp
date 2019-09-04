import { Map } from 'immutable';

export const Stages = {
  START: 'START',
  PLAY: 'PLAY',
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL',
  LEARNING: 'LEARNING',
};

let nextID = 1;
export const Food = (name, no, yes) => ({ ID: nextID++, name, yes, no });

export const initial = Object.freeze({
  stage: Stages.START,
  current: undefined,
  previous: undefined,
  head: 1,
  foods: Map([
    [1, Food('bolo de cenoura', 2)],
    [2, Food('lasanha à bolonhesa')],
  ]),
  learning: '',
  answer: undefined,
  previousAnswer: undefined,
});
