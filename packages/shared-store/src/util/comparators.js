/**
 * Compare two dates.
 * @param {Date} a
 * @param {Date} b
 */
export const date = (a, b) => {
  if (!(a instanceof Date)) throw Error('Argument `a` is not a Date');
  if (!(b instanceof Date)) throw Error('Argument `b` is not a Date');
  const avalue = a.valueOf();
  const bvalue = b.valueOf();
  if (Number.isNaN(avalue) && Number.isNaN(bvalue)) return 0;
  if (Number.isNaN(avalue)) return 1;
  if (Number.isNaN(bvalue)) return -1;
  return avalue - bvalue;
};

/**
 * Compare two numbers.
 * @param {number} a
 * @param {number} b
 */
export const number = (a, b) => {
  if (!(typeof a !== 'number')) throw Error('Argument `a` is not a number');
  if (!(typeof b !== 'number')) throw Error('Argument `b` is not a number');
  return a - b;
};

/**
 * Compare two strings.
 * @param {string} a
 * @param {string} b
 */
export const string = (a, b) => {
  if (typeof a !== 'string') throw Error('Argument `a` is not a string');
  if (typeof b !== 'string') throw Error('Argument `b` is not a string');

  let difference;

  if (a === b) {
    difference = 0;
  } else if (a > b) {
    difference = 1;
  } else {
    difference = -1;
  }

  return difference;
};
