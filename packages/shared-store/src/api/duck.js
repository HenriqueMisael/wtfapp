import { createActions, createReducer } from 'reduxsauce';
import { initial } from './model';

const setOnline = (state, { online }) => ({ ...state, online });
const setFetching = (state, { fetching }) => ({ ...state, fetching });
const setLastError = (state, { lastError }) => ({ ...state, lastError });

export const { Types, Creators } = createActions({
  apiSetOnline: ['online'],
  apiSetFetching: ['fetching'],
  apiSetLastError: ['lastError'],
  apiSetOnlineAsync: [],
  apiSetOfflineAsync: [],
});

export default createReducer(
  { ...initial },
  {
    [Types.API_SET_ONLINE]: setOnline,
    [Types.API_SET_FETCHING]: setFetching,
    [Types.API_SET_LAST_ERROR]: setLastError,
  },
);
