import { Map } from 'immutable';

/**
 * @template T
 * @param {Iterable<T>} collection
 * @param {(e: T) => string} keyFn
 * @returns {Map<string, T>}
 */
export const normalize = (collection, keyFn) => {
  if (typeof keyFn !== 'function') throw new Error('Invalid key function.');
  const normal = {};
  for (const element of collection) {
    normal[keyFn(element)] = element;
  }
  return Map(normal);
};

/**
 * @template T
 * @param {Map<string, T>} map
 */
export const denormalize = map => {
  return Object.keys(map).map(key => map.get(key));
};
