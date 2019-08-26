import axios from 'axios';

/**
 * @param {string} id
 */
export const fetchOne = async id => {
  const response = await axios.get(`/food/${id}`);
  return response.data;
};
