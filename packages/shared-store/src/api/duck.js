import { createActions, createReducer } from 'reduxsauce';
import { initial } from './model';

const setOnline = (state, { online }) => ({ ...state, online });

export const { Types, Creators } = createActions({
  apiSetOnline: ['online'],
  apiSetOnlineAsync: [],
  apiSetOfflineAsync: [],
});

export default createReducer(
  { ...initial },
  {
    [Types.API_SET_ONLINE]: setOnline,
  },
);
