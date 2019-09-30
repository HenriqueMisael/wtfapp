import axios from 'axios';

const foodApiUrl = '/api/food';

function* learn(newFoodName, newFoodPeculiarity, current, previous, previousAnswer) {
  const payload = {
    name: newFoodName,
    peculiarity: newFoodPeculiarity,
    last: current,
    previous,
    previousAnswer,
  };

  const response = yield axios.post(foodApiUrl, payload);
  return response.data;
}

function* get(id) {
  const response = yield axios.get(`${foodApiUrl}/${id}`);

  return response.data;
}

export default Object.freeze({
  learn,
  get,
});
