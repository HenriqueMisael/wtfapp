import axios from 'axios';

const defaultConfig = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    mode: 'cors',
  },
};

// const foodApiUrl = 'https://wtfbeck.herokuapp.com/api/food';
const foodApiUrl = 'http://localhost:8080/api/food';

function* learn(newFoodName, newFoodPeculiarity, current, previous, previousAnswer) {
  const payload = {
    name: newFoodName,
    peculiarity: newFoodPeculiarity,
    last: current,
    previous,
    previousAnswer,
  };

  const response = yield axios.post(foodApiUrl, payload);
  console.log('response', response);
  return response.data;
}

function* get(id) {
  const response = yield axios.get(`${foodApiUrl}/${id}`, defaultConfig);

  console.log('response', response);
  return response.data;
}

export default Object.freeze({
  learn,
  get,
});
