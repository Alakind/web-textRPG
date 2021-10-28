import { call, all } from 'redux-saga/effects';
import { authSagas } from '../ducks/auth';

export default function* rootSaga() {
  yield all([
    call(authSagas),
  ]);
}
