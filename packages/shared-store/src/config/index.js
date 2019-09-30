/* eslint-disable no-undef,no-process-env */
import axios from 'axios';

export const environment = {
  baseUrl: process.env.BASE_URL,
  nodeEnv: process.env.NODE_ENV
};

export const initNetworkConfig = () => {
  console.log(environment.baseUrl);
  axios.defaults.baseURL = environment.baseUrl;
};
