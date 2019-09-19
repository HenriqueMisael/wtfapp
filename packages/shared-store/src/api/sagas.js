import { put, takeLatest } from '@redux-saga/core/effects';
import { Creators, Types } from './duck';

function* setOnline() {
  yield put(Creators.apiSetOnline(true));
}
function* setOffline() {
  yield put(Creators.apiSetOnline(false));
}

export default [
  takeLatest(Types.API_SET_ONLINE_ASYNC, setOnline),
  takeLatest(Types.API_SET_OFFLINE_ASYNC, setOffline),
];
