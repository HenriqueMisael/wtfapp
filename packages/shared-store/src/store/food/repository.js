import * as api from './api';

/**
 * @param {string} id
 */
export const fetchOne = async id => {
  return api.fetchOne(id);
};
