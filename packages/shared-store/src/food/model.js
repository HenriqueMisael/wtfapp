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
  foods: Map(),
  learning: '',
  answer: undefined,
  previousAnswer: undefined,
  online: false
});
