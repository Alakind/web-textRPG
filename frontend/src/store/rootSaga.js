import { call, all } from 'redux-saga/effects';
import { authSagas } from '../ducks/auth';
import { characterSagas } from '../ducks/character';

export default function* rootSaga() {
  yield all([
    call(authSagas),
    call(characterSagas),
  ]);
}
