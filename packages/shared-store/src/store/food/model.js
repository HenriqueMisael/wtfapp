const Food = (name, no, yes) => ({ name, yes, no });

export const initial = Object.freeze({
  stage: 'START',
  current: undefined,
  all: new Map([
    [1, Food('lasanha', 2)],
    [2, Food('macarrão', 3)],
    [3, Food('brigadeiro')]
  ])
});
